# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `src/config/dynamoDBConfig.ts` — La fase "Configuración inicial y creación de productos" ya venia resuelta por el codigo base: este archivo pasa a ser el ejercicio.

## Mapa de componentes

El repo tiene una carpeta por componente. Cada uno se instala y verifica dentro de la suya.

| Componente | Carpeta | Rol | Capa | Track | Tecnologias |
|---|---|---|---|---|---|
| `app` | (raiz) | practice, chapter | server | Node | Express, DynamoDB, Jest |
| `infra-local` | (raiz) | support | infra | Compose local | DynamoDB |

## Orden de arranque

1. `docker compose up -d` (en la raiz) — levanta la infraestructura local.
2. `npm install --no-audit --no-fund && npm run build` — componente `app` (practice, chapter).

### Contratos entre componentes

- `app` expone http (api: http://localhost:3000):
  - `POST /products`
  - `GET /products/:id`
  - `PUT /products/:id`
  - `DELETE /products/:id`

## Como saber que terminaste

```bash
npm install --no-audit --no-fund && npm run build && docker compose config -q
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Backend, Especialidad Desarrollador, Tecnología Node, Advanced L2

### Brecha de conocimiento
CRUD de productos en DynamoDB expuesto por una API REST con Express y pruebas con Jest

### Misión / candidato
Persistir y consultar productos

### Reto
- Tema: CRUD de productos con Express y DynamoDB
- Seniority: advanced-l2
- Tipo: practical
- Título: Implementación de CRUD de productos en DynamoDB con Express
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Configuración inicial y creación de productos — objetivo: Configurar el entorno de desarrollo y permitir la creación de productos. — entregable (NO resolver): Proyecto configurado con Express y DynamoDB, funcionalidad para crear productos y pruebas unitarias correspondientes.
- Fase 2: Lectura y actualización de productos — objetivo: Implementar la funcionalidad para leer y actualizar productos. — entregable (NO resolver): Funcionalidad para leer y actualizar productos con pruebas unitarias correspondientes.
- Fase 3: Eliminación de productos y pruebas finales — objetivo: Implementar la funcionalidad para eliminar productos y realizar pruebas finales. — entregable (NO resolver): Funcionalidad para eliminar productos con pruebas unitarias correspondientes y revisión de todas las pruebas.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "reto-express",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "test": "jest"
  },
  "dependencies": {
    "@aws-sdk/client-dynamodb": "3.1170.0",
    "@aws-sdk/lib-dynamodb": "3.1170.0",
    "@types/aws-sdk": "2.7.4",
    "@types/jest": "29.5.14",
    "@types/uuid": "11.0.0",
    "dotenv": "18.0.10",
    "express": "4.22.3",
    "jest": "29.7.0",
    "ts-jest": "29.4.15",
    "ts-node": "10.9.2",
    "uuid": "14.0.3"
  },
  "devDependencies": {
    "@types/express": "4.17.25",
    "@types/node": "22.20.5",
    "typescript": "5.7.3"
  },
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node"
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "dist",
    "strict": true,
    "strictPropertyInitialization": false,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "types": [
      "node"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "test",
    "src/**/*.test.ts",
    "src/**/*.spec.ts"
  ]
}

// === ARCHIVO: src/core/models/Product.ts ===
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

// === ARCHIVO: src/config/dynamoDBConfig.ts ===
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

// === ARCHIVO: src/inbound-adapter/routes/productRoutes.ts ===
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

// === ARCHIVO: src/core/services/ProductService.ts ===
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

// === ARCHIVO: src/outbound-adapter/repositories/ProductRepository.ts ===
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

// === ARCHIVO: src/main.ts ===
import dotenv from 'dotenv';
import { app } from './app';

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

// === ARCHIVO: src/app.ts ===
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

// === ARCHIVO: src/tests/product.test.ts ===
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

// === ARCHIVO: docker-compose.yml ===
# Infraestructura local del reto. SOLO desarrollo: credenciales de ejemplo (local-dev-only), puertos en loopback.
# Levantar: docker compose up -d --wait
name: infra-local
services:
  dynamodb-local:
    image: "amazon/dynamodb-local:2.5.2"
    command: ["-jar","DynamoDBLocal.jar","-sharedDb","-inMemory"]
    ports:
      - "127.0.0.1:8000:8000"
    healthcheck:
      test: ["CMD-SHELL","bash -c ':> /dev/tcp/127.0.0.1/8000' || exit 1"]
      interval: 10s
      timeout: 5s
      retries: 10
      start_period: 5s


// === ARCHIVO: infra-local/README.md ===
# Infraestructura local

Servicios de soporte para el reto, definidos en `docker-compose.yml` (raiz del repo).

```bash
docker compose up -d --wait
```

| Servicio | Imagen | Puertos (host) |
|---|---|---|
| DynamoDB Local | `amazon/dynamodb-local:2.5.2` | 8000 |

Credenciales: solo de desarrollo local (`local-dev-only`, `local`). No son secretos ni deben reutilizarse.
Los scripts de `infra-local/` (tablas, topics) se ejecutan con el compose en estado healthy.


// === ARCHIVO: infra-local/dynamodb/create-tables.sh ===
#!/usr/bin/env bash
# Crea las tablas en DynamoDB Local (idempotente). Credenciales dummy: DynamoDB Local no valida firmas.
set -euo pipefail

export AWS_ACCESS_KEY_ID=local
export AWS_SECRET_ACCESS_KEY=local
export AWS_REGION=us-east-1
ENDPOINT="${DYNAMODB_ENDPOINT:-http://localhost:8000}"

create_table() {
  local name="$1" pk="$2" sk="${3:-}"
  if aws dynamodb describe-table --table-name "$name" --endpoint-url "$ENDPOINT" >/dev/null 2>&1; then
    echo "Tabla $name ya existe"
    return
  fi
  local attrs="AttributeName=$pk,AttributeType=S"
  local keys="AttributeName=$pk,KeyType=HASH"
  if [ -n "$sk" ]; then
    attrs="$attrs AttributeName=$sk,AttributeType=S"
    keys="$keys AttributeName=$sk,KeyType=RANGE"
  fi
  # shellcheck disable=SC2086
  aws dynamodb create-table --table-name "$name" --attribute-definitions $attrs --key-schema $keys \
    --billing-mode PAY_PER_REQUEST --endpoint-url "$ENDPOINT" >/dev/null
  echo "Tabla $name creada"
}

create_table "app-items" "id"

```
