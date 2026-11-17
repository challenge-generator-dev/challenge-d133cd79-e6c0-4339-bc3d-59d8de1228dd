import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, GetCommand, UpdateCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb';
import dotenv from 'dotenv';

dotenv.config();

class DynamoDBConfig {
    private static instance: DynamoDBDocumentClient;
    private readonly tableName: string;

    public constructor() {
        const region = process.env.AWS_REGION || 'us-east-1';
        const endpoint = process.env.DYNAMODB_ENDPOINT || undefined;

        const client = new DynamoDBClient({
            region,
            endpoint,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'fakeAccessKeyId',
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'fakeSecretAccessKey'
            }
        });

        DynamoDBConfig.instance = DynamoDBDocumentClient.from(client);
        this.tableName = process.env.DYNAMODB_TABLE_NAME || 'Products';
    }

    public static getInstance(): DynamoDBDocumentClient {
      throw new Error('TODO(reto): getInstance');
    }

    public getTableName(): string {
        return this.tableName;
    }

    public async putItem(item: Record<string, any>): Promise<void> {
      throw new Error('TODO(reto): putItem');
    }

    public async getItem(key: Record<string, any>): Promise<Record<string, any> | null> {
      throw new Error('TODO(reto): getItem');
    }

    public async updateItem(key: Record<string, any>, updateExpression: string, expressionAttributeValues: Record<string, any>): Promise<void> {
      throw new Error('TODO(reto): updateItem');
    }

    public async deleteItem(key: Record<string, any>): Promise<void> {
      throw new Error('TODO(reto): deleteItem');
    }
}

export default DynamoDBConfig;