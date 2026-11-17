// TODO(reto): Implementar la lógica de negocio para las operaciones CRUD de productos.
// Debes validar los datos de entrada y delegar la persistencia al ProductRepository.
// Ejemplo de estructura esperada:
// async createProduct(productData: Omit<Product, 'id'>): Promise<Product> { ... }
// async getProductById(id: string): Promise<Product | null> { ... }
// async updateProduct(id: string, productData: Partial<Product>): Promise<Product> { ... }
// async deleteProduct(id: string): Promise<void> { ... }

import { Product } from '../models/Product';

export class ProductService {
    // Inyecta el ProductRepository aquí
    constructor() {}

    async createProduct(productData: Omit<Product, 'id'>): Promise<Product> {
        throw new Error('Method not implemented');
    }

    async getProductById(id: string): Promise<Product | null> {
        throw new Error('Method not implemented');
    }

    async updateProduct(id: string, productData: Partial<Product>): Promise<Product> {
        throw new Error('Method not implemented');
    }

    async deleteProduct(id: string): Promise<void> {
        throw new Error('Method not implemented');
    }
}