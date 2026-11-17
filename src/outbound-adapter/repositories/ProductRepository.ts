import { Product } from '../../core/models/Product';
import DynamoDBConfig from '../../config/dynamoDBConfig';

export class ProductRepository {
    private dynamoDBConfig: DynamoDBConfig;
    private tableName: string;

    constructor() {
        this.dynamoDBConfig = new DynamoDBConfig();
        this.tableName = this.dynamoDBConfig.getTableName();
    }

    async create(product: Product): Promise<Product> {
        // TODO(reto): Implementar la creación de un producto en DynamoDB
        // Usa el método putItem de DynamoDBConfig para guardar el producto
        // El producto debe tener un id generado (puedes usar uuid)
        throw new Error('Method not implemented');
    }

    async findById(id: string): Promise<Product | null> {
        // TODO(reto): Implementar la búsqueda de un producto por ID en DynamoDB
        // Usa el método getItem de DynamoDBConfig con la clave del producto
        // Retorna null si no se encuentra el producto
        throw new Error('Method not implemented');
    }

    async update(product: Product): Promise<Product> {
        // TODO(reto): Implementar la actualización de un producto en DynamoDB
        // Usa el método updateItem de DynamoDBConfig
        // Actualiza todos los campos del producto excepto el id
        throw new Error('Method not implemented');
    }

    async delete(id: string): Promise<void> {
        // TODO(reto): Implementar la eliminación de un producto en DynamoDB
        // Usa el método deleteItem de DynamoDBConfig con la clave del producto
        throw new Error('Method not implemented');
    }
}