import { Router, Request, Response, NextFunction } from 'express';
import { ProductService } from '../../core/services/ProductService';
import { Product } from '../../core/models/Product';

const router = Router();
const productService = new ProductService();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productData = req.body as Omit<Product, 'id'>;
        
        if (!productData.name || productData.price === undefined) {
            res.status(400).json({
                error: 'Bad Request',
                message: 'El nombre y el precio son requeridos'
            });
            return;
        }

        const createdProduct = await productService.createProduct(productData);
        res.status(201).json(createdProduct);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        
        if (!id) {
            res.status(400).json({
                error: 'Bad Request',
                message: 'El ID del producto es requerido'
            });
            return;
        }

        const product = await productService.getProductById(id);
        
        if (!product) {
            res.status(404).json({
                error: 'Not Found',
                message: `Producto con ID ${id} no encontrado`
            });
            return;
        }

        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
});

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const productData = req.body as Partial<Product>;
        
        if (!id) {
            res.status(400).json({
                error: 'Bad Request',
                message: 'El ID del producto es requerido'
            });
            return;
        }

        const existingProduct = await productService.getProductById(id);
        
        if (!existingProduct) {
            res.status(404).json({
                error: 'Not Found',
                message: `Producto con ID ${id} no encontrado`
            });
            return;
        }

        const updatedProduct = await productService.updateProduct(id, productData);
        res.status(200).json(updatedProduct);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        
        if (!id) {
            res.status(400).json({
                error: 'Bad Request',
                message: 'El ID del producto es requerido'
            });
            return;
        }

        const existingProduct = await productService.getProductById(id);
        
        if (!existingProduct) {
            res.status(404).json({
                error: 'Not Found',
                message: `Producto con ID ${id} no encontrado`
            });
            return;
        }

        await productService.deleteProduct(id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
});

export default router;
export const productRoutes = router;