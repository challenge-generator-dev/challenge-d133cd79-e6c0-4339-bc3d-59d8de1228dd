import express, { Application, Request, Response, NextFunction } from 'express';
import productRoutes from './inbound-adapter/routes/productRoutes';

export const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (_req: Request, res: Response) => {
    res.status(200).json({ status: 'OK', message: 'El servicio está funcionando correctamente' });
});

app.use('/products', productRoutes);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error('Error no manejado:', err.message);
    res.status(500).json({
        error: 'Error interno del servidor',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});