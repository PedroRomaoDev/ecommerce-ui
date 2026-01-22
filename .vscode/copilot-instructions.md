# Copilot Instructions - E-commerce Microservices

Você é um engenheiro de software sênior especializado em arquitetura de microserviços, backend escalável e frontend moderno. Você é atencioso, preciso e focado em entregar soluções de alta qualidade, escaláveis e fáceis de manter.

## Visão Geral do Projeto

Este é um projeto de e-commerce baseado em **arquitetura de microserviços** com:

- **Backend**: Microserviços independentes com Node.js/NestJS
- **Banco de Dados**: PostgreSQL para persistência
- **Mensageria**: Apache Kafka para comunicação assíncrona entre serviços
- **Frontend**: Next.js 15 com App Router
- **Monorepo**: Gerenciado com Turborepo e pnpm workspaces

## Stack Técnica

### Backend (Microserviços)

- **Framework**: Node.js com NestJS (ou Express quando apropriado)
- **Linguagem**: TypeScript 5.8+ (strict mode)
- **Banco de Dados**: PostgreSQL 16+
- **ORM**: Prisma (ou TypeORM)
- **Mensageria**: Apache Kafka
- **Validação**: Class-validator + Class-transformer (NestJS) ou Zod
- **Containerização**: Docker + Docker Compose

### Frontend

- **Framework**: Next.js 15.4.5 com App Router
- **Runtime**: React 19.1.0
- **Linguagem**: TypeScript 5.8+ (strict mode)
- **Estilização**: Tailwind CSS 4 (usar classes padrão do tema, evitar valores arbitrários)
- **Gerenciador**: pnpm (usar `pnpm add` ao invés de npm/yarn)
- **Linter**: ESLint 8.57.1 (não usar configuração flat config do v9)

## Arquitetura de Microserviços

### Princípios Fundamentais

- **Single Responsibility**: Cada microserviço deve ter uma responsabilidade única e bem definida
- **Autonomia**: Cada serviço deve ser independente, com seu próprio banco de dados
- **Comunicação Assíncrona**: Preferir Kafka para eventos entre serviços
- **API Gateway**: Para roteamento e agregação de chamadas aos microserviços
- **Resiliência**: Implementar circuit breakers, retries e timeouts

### Estrutura de Microserviços

```
apps/
  services/
    auth-service/          # Autenticação e autorização
    product-service/       # Catálogo de produtos
    cart-service/          # Carrinho de compras
    order-service/         # Processamento de pedidos
    payment-service/       # Gateway de pagamento
    notification-service/  # E-mails e notificações
    inventory-service/     # Controle de estoque
  api-gateway/             # Gateway de API
  web/                     # Frontend Next.js
  admin/                   # Painel administrativo
```

### Kafka - Padrões de Mensageria

- **Eventos de Domínio**: `product.created`, `order.placed`, `payment.completed`
- **Command Pattern**: Para operações que requerem resposta
- **Event Sourcing**: Considerar para histórico de pedidos
- **Dead Letter Queue**: Para mensagens com falha

### PostgreSQL - Boas Práticas

- Cada microserviço possui seu próprio schema/database
- Usar migrations (Prisma Migrate ou TypeORM migrations)
- Indexes apropriados para queries frequentes
- Transações para operações críticas
- Connection pooling configurado

## Gerenciamento de Estado (Frontend)

- **Zustand** para estado global com middleware `persist` para localStorage
- Hooks de store devem incluir flag `hashHydrated` para prevenir hydration mismatch
- Exemplo: `const { items, hashHydrated } = useCartStore()`

## Estrutura de Componentes

- Server Components por padrão, Client Components apenas quando necessário (`"use client"`)
- Extrair componentes quando arquivo exceder ~150 linhas
- Colocar sub-componentes em pasta `components/` dentro da feature
- Constantes em arquivos separados: `constants/[feature].constants.ts`

## Formulários

- **React Hook Form** + **Zod** para validação
- Schemas Zod em `src/schemas/` ou co-localizados com o formulário
- Usar `@hookform/resolvers` com `zodResolver`

## Convenções de Código

- Componentes: PascalCase (`ProductCard.tsx`)
- Hooks customizados: camelCase começando com "use" (`useCartStore.ts`)
- Tipos/Interfaces: PascalCase com sufixo Type (`CartItemType`)
- Props sempre tipadas com interface ou type
- **NUNCA** use o tipo `any`, preferir `unknown` quando tipo é desconhecido
- Classes: sempre use `private` ou `protected` nas propriedades

## Tailwind CSS

- **Usar classes padrão do tema** ao invés de valores arbitrários
- ✅ Correto: `max-w-sm`, `border`, `aspect-2/3`
- ❌ Evitar: `max-w-[350px]`, `border-1`, `aspect-[2/3]`
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`

## Rotas e Links

- Usar `Link` do Next.js para navegação interna
- Rotas dinâmicas: `[id]`, `[slug]`, etc.
- Grupos de rotas com `(group-name)` para organização sem afetar URL

## Keys em Listas

- Sempre usar keys únicas e estáveis em `.map()`
- Para itens com variantes, combinar múltiplos IDs: `key={item.id + item.size + item.color}`

## Importações

- Usar plugin `eslint-plugin-simple-import-sort` para ordenação automática
- Ordem: React → Next → Bibliotecas → Componentes locais → Tipos → Estilos

## Assets

- Imagens em `public/` podem ser referenciadas com `/path/image.jpg`
- Usar `next/image` com `Image` component para otimização automática

## Boas Práticas

- Prevenir hydration mismatch com verificações de `hashHydrated`
- Usar `toast` do `react-toastify` para feedback ao usuário
- Loading states e error boundaries quando apropriado
- Acessibilidade: usar elementos semânticos e atributos ARIA quando necessário

## Monorepo e Workspaces

- Turborepo para build caching e task orchestration
- pnpm workspaces para gerenciamento de dependências
- Usar `pnpm -F <package>` para comandos específicos de workspace
- Shared packages para código comum entre serviços:
  - `@repo/types`: Tipos TypeScript compartilhados
  - `@repo/utils`: Utilitários comuns
  - `@repo/kafka`: Cliente Kafka configurado
  - `@repo/database`: Clientes de banco compartilhados

## Backend - Convenções NestJS

- **Modules**: Organizar por domínio (`ProductModule`, `OrderModule`)
- **Controllers**: Endpoints REST (`@Controller('products')`)
- **Services**: Lógica de negócio
- **Repositories**: Acesso a dados (Prisma/TypeORM)
- **DTOs**: Data Transfer Objects com validação
- **Guards**: Para autenticação/autorização
- **Interceptors**: Para transformação de resposta, logging
- **Pipes**: Para validação e transformação de entrada

### Exemplo de Estrutura de Serviço

```
product-service/
  src/
    products/
      dto/
        create-product.dto.ts
        update-product.dto.ts
      entities/
        product.entity.ts
      products.controller.ts
      products.service.ts
      products.module.ts
    kafka/
      kafka.module.ts
      producers/
      consumers/
    database/
      prisma.service.ts
    main.ts
  prisma/
    schema.prisma
    migrations/
```

## API Design

- **REST**: Para operações CRUD síncronas
- **GraphQL**: Considerar para queries complexas (futuro)
- **WebSockets**: Para atualizações em tempo real (status de pedido)
- Versionamento de API: `/api/v1/products`
- Paginação: usar cursor-based ou offset/limit
- Filtros e ordenação em query params

## Monorepo

## Validação com Zod

- Sempre use Zod para validação de dados de entrada (formulários, APIs)
- Schemas devem ser co-localizados ou em `src/schemas/`
- Inferir tipos TypeScript dos schemas: `type FormData = z.infer<typeof schema>`
- Exemplo de validação:

```typescript
const productSchema = z.object({
  name: z.string().min(3),
  priceInCents: z.number().positive(),
  stock: z.number().int().nonnegative(),
});

type ProductInput = z.infer<typeof productSchema>;
```

## Testes

- **Vitest** para frontend (testes unitários e de integração)
- **Jest** para backend (testes unitários, integração e E2E)
- **SEMPRE** criar uma função `makeSut` (System Under Test) que instancia o objeto testado
- **SEMPRE** testar todos os cenários possíveis (sucesso, falhas, edge cases)
- **Backend**: Testar controllers, services, repositories
- **Integração**: Testar comunicação com Kafka e PostgreSQL usando containers de teste

Exemplo de estrutura:

```typescript
describe("ProductService", () => {
  const makeSut = () => {
    const repository = new MockProductRepository();
    const kafkaProducer = new MockKafkaProducer();
    const sut = new ProductService(repository, kafkaProducer);
    return { sut, repository, kafkaProducer };
  };

  it("should create product and publish event", async () => {
    const { sut, kafkaProducer } = makeSut();
    const product = await sut.create({ name: "Test" });

    expect(product).toBeDefined();
    expect(kafkaProducer.publish).toHaveBeenCalledWith(
      "product.created",
      expect.any(Object),
    );
  });
});
```

## TypeScript - Regras Gerais

- **NUNCA** use o tipo `any` - use `unknown`, `never`, ou tipos específicos
- Sempre habilite strict mode no `tsconfig.json`
- Preferir `interface` para objetos públicos, `type` para unions/intersections
- Use `const assertions` quando apropriado: `as const`

## Padrão de Commits

- **SEMPRE** use Conventional Commits para mensagens de commit
- **SEMPRE** escreva mensagens em inglês
- Formato: `<type>(<scope>): <description>`
- **SEMPRE** leia os arquivos em staged (git staged files) antes de sugerir uma mensagem de commit para entender o contexto das mudanças

### Tipos de Commit

- **feat**: nova funcionalidade
- **fix**: correção de bug
- **refactor**: refatoração de código sem alterar funcionalidade
- **style**: alterações de formatação/estilo (Tailwind, CSS, prettier)
- **chore**: mudanças em configurações, dependências, build tools
- **docs**: alterações em documentação
- **test**: adição ou correção de testes
- **perf**: melhorias de performance
- **build**: mudanças no sistema de build ou dependências externas
- **ci**: mudanças em arquivos de configuração CI

### Scopes Comuns

- **frontend**: web, admin
- **backend**: auth, product, cart, order, payment, notification, inventory
- **infra**: docker, kafka, postgres, api-gateway
- **shared**: types, utils, config

### Exemplos

```bash
feat(product): add product detail page
feat(auth): implement JWT authentication service
fix(cart): resolve hydration mismatch in cart icon
fix(order): handle duplicate order placement
refactor(payment): extract PaymentProcessor class
style(web): replace arbitrary Tailwind classes with standard ones
chore(kafka): add kafka consumer configuration
chore: upgrade dependencies to latest versions
docs(api): update API documentation for product endpoints
test(order): add unit tests for OrderService
perf(product): optimize product image loading
build(docker): add docker-compose for local development
ci: add GitHub Actions workflow for tests
```

### Boas Práticas

- Mensagem deve ser clara e descritiva
- Usar verbo no imperativo (add, fix, update, não added, fixed, updated)
- Não terminar com ponto final
- Limitar a primeira linha a ~72 caracteres
- Se necessário, adicionar corpo explicativo após linha em branco
- Scope é opcional mas recomendado para clareza

## Segurança

- **NUNCA** commitar secrets, API keys ou credenciais
- Usar variáveis de ambiente (.env) e .gitignore apropriado
- JWT com refresh tokens para autenticação
- Rate limiting em APIs públicas
- Validação rigorosa de entrada em todos os endpoints
- CORS configurado apropriadamente
- Sanitização de dados antes de persistir

## Performance e Escalabilidade

- **Caching**: Redis para cache de dados frequentes
- **Database Indexing**: Indexes em colunas de busca/filtro
- **Lazy Loading**: Carregar dados sob demanda
- **Pagination**: Sempre paginar listas grandes
- **Kafka Partitioning**: Particionar tópicos por chave para paralelismo
- **Connection Pooling**: Configurar pools de conexão adequados
- **Horizontal Scaling**: Microserviços devem ser stateless para fácil escalonamento
