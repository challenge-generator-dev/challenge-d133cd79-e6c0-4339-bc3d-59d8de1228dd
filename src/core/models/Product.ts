import { v4 as uuidv4 } from 'uuid';

export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
}

export class ProductBuilder {
    private product: Product;

    constructor() {
        this.product = {
            id: uuidv4(),
            name: '',
            price: 0,
            description: ''
        };
    }

    withName(name: string): ProductBuilder {
        if (!name || name.trim().length === 0) {
            throw new Error('Product name cannot be empty');
        }
        this.product.name = name;
        return this;
    }

    withPrice(price: number): ProductBuilder {
        if (price <= 0) {
            throw new Error('Product price must be greater than zero');
        }
        this.product.price = price;
        return this;
    }

    withDescription(description: string): ProductBuilder {
        this.product.description = description;
        return this;
    }

    build(): Product {
        return this.product;
    }
}