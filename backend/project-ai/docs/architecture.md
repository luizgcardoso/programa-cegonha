# Arquitetura do Sistema — Equipe Cegonha

O sistema segue uma arquitetura monolítica modular (Backend) e uma Single Page Application (Frontend), otimizada para o MVP e manutenção simplificada.

## 1. Stack Tecnológica

### 1.1. Backend (`/backend/api-express`)
- **Linguagem:** TypeScript.
- **Runtime:** Node.js.
- **Framework:** Express.
- **Banco de Dados:** PostgreSQL.
- **ORM:** TypeORM (Data Mapper pattern).
- **Validação:** Zod (Schemas de entrada e saída).

### 1.2. Frontend (`/frontend`)
- **Framework:** React.
- **Bundler:** Vite.
- **Estilização:** TailwindCSS.
- **Ícones:** Lucide React.
- **Gerenciamento de Estado:** React Hooks e Context API.

## 2. Estrutura de Pastas (Backend)

- `src/entities/`: Definição das tabelas do banco de dados via TypeORM.
- `src/routes/`: Definição dos endpoints da API.
- `src/middlewares/`: Interceptadores de requisição (Ex: `validateMiddleware.ts`).
- `src/controllers/`: Lógica de orquestração das requisições.
- `src/services/`: Lógica de negócio e comunicação com o repositório.

## 3. Padrões de Design e Governança

### 3.1. Validação de Contratos
Toda entrada de dados na API deve passar por um middleware de validação utilizando **Zod**. Isso garante que o sistema seja resiliente a dados malformados.

### 3.2. Tratamento de Erros
Utilização de um middleware global de erros que captura exceções e as formata em uma resposta JSON padronizada, evitando vazamento de stack traces em produção.

### 3.3. Autenticação (MVP)
Para o MVP da banca, a autenticação é simulada (`authMock.ts`), permitindo a navegação entre perfis de ACS sem a complexidade de um provedor OAuth2/JWT completo neste estágio.

## 4. Integração e Fluxo de Dados

1. O **Frontend** envia requisições HTTP via Axios.
2. O **Backend (Express)** recebe a requisição.
3. O **Middleware de Validação (Zod)** valida o corpo/parâmetros.
4. O **Controller** chama o **Service**.
5. O **Service** interage com o **Banco de Dados** via **TypeORM**.
6. A resposta retorna tipada até o Frontend.
