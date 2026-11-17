# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Implementación de CRUD de productos en DynamoDB con Express**.

| | |
|---|---|
| Tema | CRUD de productos con Express y DynamoDB |
| Nivel | advanced-l2 |
| Chapter | Backend |
| Especialidad | Node |
| Stack | TypeScript / Express 4.18.2 |
| Patron arquitectonico | capas estándar (inbound-adapter, core, outbound-adapter) |
| Tiempo estimado | 8 horas |

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

## Receta del stack

Esqueleto obligatorio:

- `package.json y tsconfig.json en la raiz`
- `src/main.ts como bootstrap`
- `src/domain con entidades y puertos`
- `src/application con casos de uso`
- `src/infrastructure con repositorios y controller`
- `Express como framework (vinculante: no mezcles otro framework del mismo ecosistema)`

Trampas conocidas:

- No inventes versiones de npm. Usa rango con caret (`^5.7.2`) sobre una version que exista, o deja que el paquete la resuelva. Una version inexistente (ej. `@types/react-router-dom@6.19.0`) hace fallar `npm install` con ETARGET y el proyecto no instala.
- Los paquetes `@types/*` solo hacen falta para librerias que no traen sus propios tipos. React Router, NestJS y Prisma ya los traen: agregar `@types/` de esos rompe o sobra.
- El `tsconfig.json` es obligatorio: sin el, `tsc` no sabe que compilar.

Dependencias:

- @aws-sdk/client-dynamodb 3.1170.0
- @aws-sdk/lib-dynamodb 3.1170.0
- @types/aws-sdk 2.7.4
- @types/jest 29.5.14
- @types/uuid 11.0.0
- dotenv 18.0.10
- express 4.22.3
- jest 29.7.0
- ts-jest 29.4.15
- ts-node 10.9.2
- uuid 14.0.3
- @types/express 4.17.25
- @types/node 22.20.5
- typescript 5.7.3

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Segui el orden de arranque del mapa de componentes (infraestructura local primero) y corre `npm install --no-audit --no-fund && npm run build && docker compose config -q` desde la raiz: mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install --no-audit --no-fund && npm run build && docker compose config -q` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Configuración inicial y creación de productos**: Proyecto configurado con Express y DynamoDB, funcionalidad para crear productos y pruebas unitarias correspondientes.
- **Fase 2 — Lectura y actualización de productos**: Funcionalidad para leer y actualizar productos con pruebas unitarias correspondientes.
- **Fase 3 — Eliminación de productos y pruebas finales**: Funcionalidad para eliminar productos con pruebas unitarias correspondientes y revisión de todas las pruebas.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Superficie de practica (NO completes)

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs. No toques la logica que el reto pide completar.

- [ ] `src/config/dynamoDBConfig.ts` — La fase "Configuración inicial y creación de productos" ya venia resuelta por el codigo base: este archivo pasa a ser el ejercicio.

## Lo que falta y tenes que completar

No se detectaron huecos: estan los archivos declarados, el boilerplate del stack y ninguna referencia quedo colgando. Igual corre el comando de verificacion — que los archivos existan no garantiza que compilen.

### Presentes (13)

- `package.json`
- `tsconfig.json`
- `src/core/models/Product.ts`
- `src/config/dynamoDBConfig.ts`
- `src/inbound-adapter/routes/productRoutes.ts`
- `src/core/services/ProductService.ts`
- `src/outbound-adapter/repositories/ProductRepository.ts`
- `src/main.ts`
- `src/app.ts`
- `src/tests/product.test.ts`
- `docker-compose.yml`
- `infra-local/README.md`
- `infra-local/dynamodb/create-tables.sh`

### Capas del patron declarado

Son las capas que la propuesta arquitectonica plantea, marcadas segun existan hoy en el repo. Orientan donde poner el codigo nuevo; no son una condicion para compilar.

- `src/inbound-adapter/routes` (presente)
- `src/core/services` (presente)
- `src/core/models` (presente)
- `src/outbound-adapter/repositories` (presente)
- `src/config` (presente)
- `tests` (ausente)

## Verificacion

```bash
npm install --no-audit --no-fund && npm run build && docker compose config -q
```

El comando tiene que pasar SIN implementar los archivos de la superficie de practica: solo andamiaje.

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- Cada componente vive en su carpeta: instala y compila dentro de ella, y no muevas archivos entre componentes.
- Respeta los contratos entre componentes (endpoints, topics) tal como estan declarados en el mapa de componentes.
- El patron es **capas estándar (inbound-adapter, core, outbound-adapter)**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Backend, Especialidad Desarrollador, Tecnología Node, Advanced L2
- Brecha que el reto ataca: CRUD de productos en DynamoDB expuesto por una API REST con Express y pruebas con Jest
- Mision: Persistir y consultar productos

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
