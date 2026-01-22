# BeWear E-commerce

Solução enterprise de e-commerce construída sobre arquitetura orientada a microserviços (MSA) com gerenciamento de monorepo via Turborepo. O sistema implementa separação de concerns através de aplicações Next.js 15 (App Router) servindo interfaces distintas para consumidores finais e administradores, enquanto o backend opera como um ecossistema distribuído de serviços independentes e autônomos.

A comunicação inter-serviços utiliza um modelo híbrido: requisições síncronas via RESTful APIs para operações de leitura e comandos de resposta imediata, combinadas com mensageria assíncrona através de Apache Kafka para event-driven architecture, garantindo desacoplamento temporal, tolerância a falhas e processamento eventual consistency.

A infraestrutura de build emprega Turborepo com pipelines incrementais e caching distribuído, permitindo compilações paralelas, hot module replacement cross-workspace e deployments independentes por serviço. O gerenciamento de dependências via PNPM Workspaces otimiza o consumo de disco através de content-addressable storage e hoisting seletivo de pacotes compartilhados.

Desenvolvida com TypeScript end-to-end, a aplicação garante type safety desde a camada de apresentação até os contratos de API, utilizando schemas compartilhados via packages internos do monorepo e validação em runtime com Zod.

## Índice

- [Visão Geral](#visão-geral)
- [Arquitetura](#arquitetura)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Desenvolvimento](#desenvolvimento)
- [Build](#build)
- [Aplicações](#aplicações)
- [Microserviços](#microserviços)
- [Comunicação](#comunicação)
- [Contribuição](#contribuição)

## Visão Geral

BeWear é uma plataforma completa de e-commerce desenvolvida com foco em escalabilidade e manutenibilidade. O projeto utiliza uma arquitetura de microserviços organizada em monorepo, permitindo desenvolvimento independente de cada serviço enquanto mantém o código centralizado.

### Principais Características

- Arquitetura de microserviços desacoplada
- Frontend responsivo para cliente e administração
- Comunicação assíncrona via Apache Kafka
- APIs REST para operações síncronas
- Sistema de cache distribuído
- Gerenciamento centralizado com Turborepo
- Pipelines de build otimizadas

## Arquitetura

O sistema é dividido em camadas bem definidas:

### Frontend Layer

- **Client Application**: Interface do consumidor final
- **Admin Application**: Painel administrativo completo

### Backend Layer

- Microserviços independentes e especializados
- Event-driven architecture com Kafka
- APIs REST para comunicação síncrona
- Persistência de dados distribuída

### Infrastructure Layer

- Turborepo para gerenciamento do monorepo
- PNPM para gerenciamento de dependências
- Sistema de build incremental com cache

## Estrutura do Projeto

```
bewear-ui/
├── apps/
│   ├── admin/          # Aplicação administrativa
│   ├── client/         # Aplicação do cliente
│   ├── docs/           # Documentação
│   └── web/            # Landing page
├── packages/
│   ├── ui/             # Componentes compartilhados
│   ├── config/         # Configurações compartilhadas
│   └── types/          # Tipos TypeScript compartilhados
├── services/           # Microserviços backend
│   ├── products/       # Serviço de produtos
│   ├── users/          # Serviço de usuários
│   ├── orders/         # Serviço de pedidos
│   └── payments/       # Serviço de pagamentos
└── turbo.json         # Configuração do Turborepo
```

## Tecnologias

### Frontend

- [Next.js 15](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) - Estilização
- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI

### Backend

- [Node.js](https://nodejs.org/) - Runtime
- [Express](https://expressjs.com/) - Framework web
- [Apache Kafka](https://kafka.apache.org/) - Message broker
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados

### DevOps

- [Turborepo](https://turbo.build/) - Build system
- [PNPM](https://pnpm.io/) - Package manager
- [Docker](https://www.docker.com/) - Containerização

## Pré-requisitos

Certifique-se de ter instalado:

- Node.js 18+
- PNPM 8+
- Docker e Docker Compose
- Apache Kafka (via Docker)

## Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/bewear-ui.git

# Entre no diretório
cd bewear-ui

# Instale as dependências
pnpm install

# Configure as variáveis de ambiente
cp .env.example .env
```

## Desenvolvimento

### Iniciar todos os serviços

```bash
turbo dev
```

### Iniciar aplicação específica

```bash
# Admin
turbo dev --filter=admin

# Client
turbo dev --filter=client
```

### Iniciar microserviço específico

```bash
turbo dev --filter=@services/products
```

## Build

### Build de produção completo

```bash
turbo build
```

### Build de aplicação específica

```bash
turbo build --filter=admin
```

### Build com cache

O Turborepo automaticamente cacheia builds anteriores, acelerando builds subsequentes.

## Aplicações

### Admin

Painel administrativo completo para gerenciamento da plataforma.

- **URL de desenvolvimento**: http://localhost:3001
- **Funcionalidades**: Gestão de produtos, usuários, pedidos e pagamentos

### Client

Interface do usuário final para navegação e compra de produtos.

- **URL de desenvolvimento**: http://localhost:3000
- **Funcionalidades**: Catálogo, carrinho, checkout e acompanhamento de pedidos

## Microserviços

### Products Service

Gerenciamento do catálogo de produtos, categorias e estoque.

### Users Service

Autenticação, autorização e gerenciamento de perfis de usuários.

### Orders Service

Processamento e acompanhamento de pedidos.

### Payments Service

Integração com gateways de pagamento e processamento de transações.

## Comunicação

### REST APIs

Comunicação síncrona entre frontend e backend para operações CRUD e consultas.

### Apache Kafka

Eventos assíncronos para operações que não requerem resposta imediata:

- Criação de pedidos
- Processamento de pagamentos
- Atualizações de estoque
- Notificações

## Contribuição

Contribuições são bem-vindas! Por favor, siga estas diretrizes:

1. Faça fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Padrões de Commit

Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `chore:` Manutenção
- `refactor:` Refatoração de código
- `test:` Testes
