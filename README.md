# Implementación de CRUD de productos en DynamoDB con Express

El sistema debe permitir la gestión de productos en una tienda en línea. Los productos tienen un identificador único, nombre, precio y descripción. El sistema debe soportar operaciones de creación, lectura, actualización y eliminación de productos. Los productos se almacenarán en una tabla de DynamoDB y se expondrán a través de una API REST construida con Express. Se deben implementar pruebas unitarias con Jest para asegurar la funcionalidad del CRUD.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | CRUD de productos con Express y DynamoDB |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Tener el proyecto base del reto funcionando en tu máquina: clonar el repositorio, instalar las herramientas y verificar que compila y arranca antes de empezar a practicar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Instala las herramientas para ejecutar el proyecto: Node.js 18+ y npm.
- Clona el repositorio del reto (el enlace viene en la entrega del reto y en la sección "Repositorio del Proyecto" del PDF) y ábrelo en tu IDE.
- Instala las dependencias y compila ejecutando `npm install --no-audit --no-fund && npm run build && docker compose config -q` en la raíz del repositorio.
- Confirma que el comando termina sin errores: el proyecto arranca y sus pruebas corren.
- Ubica los archivos de práctica: son los que contienen `TODO(reto)` (búscalos en el repositorio). Lee el README.md y el AGENTS.md antes de empezar.

**Entregable:** El proyecto compila/arranca sin errores con `npm install --no-audit --no-fund && npm run build && docker compose config -q`.

<details>
<summary>Pistas de conocimiento</summary>

- Los archivos con `TODO(reto)` son el ejercicio: el resto del repositorio ya está resuelto y no hace falta tocarlo.
- Si el comando de verificación falla, revisa la versión de las herramientas instaladas antes de modificar código.
- AGENTS.md describe el reto, el comando de verificación y las reglas del repositorio.

</details>

### Fase 1: Configuración inicial y creación de productos

**Objetivo:** Configurar el entorno de desarrollo y permitir la creación de productos.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Configurar el proyecto con Express y DynamoDB.
- Implementar la funcionalidad para crear un producto en DynamoDB.
- Escribir pruebas unitarias con Jest para la creación de productos.

**Entregable:** Proyecto configurado con Express y DynamoDB, funcionalidad para crear productos y pruebas unitarias correspondientes.

<details>
<summary>Pistas de conocimiento</summary>

- AWS SDK v3 con DynamoDBDocumentClient
- Mockear DynamoDB en pruebas con Jest

</details>

### Fase 2: Lectura y actualización de productos

**Objetivo:** Implementar la funcionalidad para leer y actualizar productos.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementar la funcionalidad para leer un producto por su identificador.
- Implementar la funcionalidad para actualizar un producto.
- Escribir pruebas unitarias con Jest para la lectura y actualización de productos.

**Entregable:** Funcionalidad para leer y actualizar productos con pruebas unitarias correspondientes.

<details>
<summary>Pistas de conocimiento</summary>

- Uso de DynamoDBDocumentClient para operaciones de lectura y actualización.
- Estrategias para mockear servicios externos en pruebas.

</details>

### Fase 3: Eliminación de productos y pruebas finales

**Objetivo:** Implementar la funcionalidad para eliminar productos y realizar pruebas finales.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementar la funcionalidad para eliminar un producto por su identificador.
- Realizar pruebas finales para asegurar la funcionalidad completa del CRUD.
- Revisar y ajustar las pruebas unitarias para cubrir todos los casos.

**Entregable:** Funcionalidad para eliminar productos con pruebas unitarias correspondientes y revisión de todas las pruebas.

<details>
<summary>Pistas de conocimiento</summary>

- Manejo de eliminaciones en DynamoDB.
- Estrategias para asegurar la cobertura de pruebas.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un producto en el contexto de este sistema y cómo se representa en DynamoDB?
- **paraQueSirve**: ¿Para qué sirve cada operación CRUD en el sistema y cómo beneficia a los usuarios?
- **comoSeUsa**: ¿Cómo se usa la API REST para interactuar con los productos en DynamoDB?
- **erroresComunes**: ¿Cuáles son los errores comunes que pueden ocurrir durante las operaciones CRUD y cómo se manejan?
- **queDecisionesImplica**: ¿Qué decisiones de diseño implica la implementación de las operaciones CRUD en DynamoDB con Express?

## Criterios de Evaluacion

- Configuración correcta del proyecto con Express y DynamoDB.
- Implementación de la funcionalidad para crear productos y pruebas unitarias correspondientes.
- Implementación de la funcionalidad para leer productos y pruebas unitarias correspondientes.
- Implementación de la funcionalidad para actualizar productos y pruebas unitarias correspondientes.
- Implementación de la funcionalidad para eliminar productos y pruebas unitarias correspondientes.
- Uso de AWS SDK v3 con DynamoDBDocumentClient.
- Mockeo de DynamoDB en pruebas con Jest sin salir a la red.
- Cobertura completa de pruebas unitarias para todas las operaciones CRUD.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT) si no tenes un agente en el IDE. Declara lo mismo que AGENTS.md; los archivos que te devuelva el chat los guardas en esta carpeta respetando las rutas.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

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

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install --no-audit --no-fund && npm run build && docker compose config -q
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
