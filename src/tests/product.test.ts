import { ProductService } from '../core/services/ProductService';
import { ProductRepository } from '../outbound-adapter/repositories/ProductRepository';
import { Product } from '../core/models/Product';

jest.mock('../outbound-adapter/repositories/ProductRepository');
jest.mock('../config/dynamoDBConfig');

describe('ProductService', () => {
    let productService: ProductService;
    let mockProductRepository: jest.Mocked<ProductRepository>;

    const mockProduct: Product = {
        id: '123e4567-e89b-12d3-a456-426614174000',
        name: 'Test Product',
        price: 99.99,
        description: 'Test description'
    };

    beforeEach(() => {
        mockProductRepository = {
            create: jest.fn(),
            findById: jest.fn(),
            update: jest.fn(),
            delete: jest.fn()
        } as unknown as jest.Mocked<ProductRepository>;

        productService = new ProductService();
    });

    describe('createProduct', () => {
        it('debería crear un producto exitosamente', async () => {
            const productData = {
                name: 'Nuevo Producto',
                price: 49.99,
                description: 'Descripción del producto'
            };

            mockProductRepository.create.mockResolvedValue({
                ...productData,
                id: mockProduct.id
            });

            const result = await productService.createProduct(productData);

            expect(result).toHaveProperty('id');
            expect(result.name).toBe(productData.name);
            expect(result.price).toBe(productData.price);
            expect(result.description).toBe(productData.description);
            expect(mockProductRepository.create).toHaveBeenCalledTimes(1);
        });

        it('debería lanzar error si el nombre está vacío', async () => {
            const productData = {
                name: '',
                price: 49.99,
                description: 'Descripción'
            };

            await expect(productService.createProduct(productData)).rejects.toThrow('Product name cannot be empty');
        });

        it('debería lanzar error si el precio es menor o igual a cero', async () => {
            const productData = {
                name: 'Producto válido',
                price: 0,
                description: 'Descripción'
            };

            await expect(productService.createProduct(productData)).rejects.toThrow('Product price must be greater than zero');
        });
    });

    describe('getProductById', () => {
        it('debería obtener un producto por su ID', async () => {
            mockProductRepository.findById.mockResolvedValue(mockProduct);

            const result = await productService.getProductById(mockProduct.id);

            expect(result).toEqual(mockProduct);
            expect(mockProductRepository.findById).toHaveBeenCalledWith(mockProduct.id);
        });

        it('debería retornar null si el producto no existe', async () => {
            mockProductRepository.findById.mockResolvedValue(null);

            const result = await productService.getProductById('non-existent-id');

            expect(result).toBeNull();
            expect(mockProductRepository.findById).toHaveBeenCalledWith('non-existent-id');
        });
    });

    describe('updateProduct', () => {
        it('debería actualizar un producto existente', async () => {
            const updateData = { name: 'Producto actualizado' };

            mockProductRepository.update.mockResolvedValue({
                ...mockProduct,
                ...updateData
            });

            const result = await productService.updateProduct(mockProduct.id, updateData);

            expect(result.name).toBe(updateData.name);
            expect(mockProductRepository.update).toHaveBeenCalledWith({
                ...mockProduct,
                ...updateData
            });
        });

        it('debería lanzar error si el producto no existe', async () => {
            mockProductRepository.update.mockRejectedValue(new Error('Product not found'));

            await expect(productService.updateProduct('non-existent-id', { name: 'Test' }))
                .rejects.toThrow('Product not found');
        });
    });

    describe('deleteProduct', () => {
        it('debería eliminar un producto exitosamente', async () => {
            mockProductRepository.delete.mockResolvedValue();

            await productService.deleteProduct(mockProduct.id);

            expect(mockProductRepository.delete).toHaveBeenCalledWith(mockProduct.id);
        });

        it('debería lanzar error si el producto no existe al eliminar', async () => {
            mockProductRepository.delete.mockRejectedValue(new Error('Product not found'));

            await expect(productService.deleteProduct('non-existent-id'))
                .rejects.toThrow('Product not found');
        });
    });
});