# Bewear E-commerce

Um projeto full-stack de e-commerce desenvolvido com Next.js, incluindo interface do cliente e painel administrativo.

## Descrição

Este é um monorepo contendo duas aplicações:

- **Client**: Interface da loja online para clientes
- **Admin**: Painel administrativo para gerenciamento de produtos, usuários e pedidos

## 🚀 Tecnologias Utilizadas

### Core

- **Next.js** 15.3.0+ (App Router)
- **React** 19.1.0
- **TypeScript** 5.9.3
- **pnpm** 10.20.0 (workspaces)

### Styling

- **Tailwind CSS** 4.1.18
- **shadcn/ui** (componentes)
- **Lucide React** (ícones)

### Forms & Validation

- **React Hook Form** 7.61.1
- **Zod** 3.25.76
- **@hookform/resolvers** 5.2.1

### Data Visualization (Admin)

- **Recharts** 2.15.4
- **TanStack Table** 8.21.3

### Dev Tools

- **ESLint** 8.57.1
- **Prettier** 3.6.2
- **Husky** 9.1.7 (git hooks)
- **lint-staged** 15.3.0

## Estrutura do Projeto

```
ecommerce-ui/
├── client/                 # Aplicação do cliente
│   ├── src/
│   │   ├── app/           # Páginas (App Router)
│   │   ├── components/    # Componentes React
│   │   ├── constants/     # Constantes
│   │   ├── forms/         # Schemas de validação
│   │   └── types.ts       # Tipos TypeScript
│   └── public/            # Assets estáticos
│
├── admin/                 # Painel administrativo
│   ├── src/
│   │   ├── app/           # Páginas e rotas
│   │   │   ├── payments/  # Gestão de pagamentos
│   │   │   ├── products/  # Gestão de produtos
│   │   │   └── users/     # Gestão de usuários
│   │   ├── components/    # Componentes React
│   │   │   └── ui/        # Componentes shadcn/ui
│   │   ├── hooks/         # Custom hooks
│   │   └── lib/           # Utilitários
│   └── public/            # Assets estáticos
│
└── .husky/                # Git hooks
```

## Funcionalidades

### Client

- Catálogo de produtos com filtros
- Visualização detalhada de produtos
- Seleção de tamanhos e cores
- Carrinho de compras (Zustand)
- Sistema de checkout
- Layout responsivo
- Dark mode

### Admin

- Dashboard com gráficos e métricas
- Gerenciamento de produtos (CRUD)
- Gerenciamento de usuários
- Visualização de pedidos/pagamentos
- Data tables com paginação e ordenação
- Sidebar colapsável com navegação
- Formulários validados com React Hook Form + Zod
- Dark mode

## 🛠️ Como Executar

### Pré-requisitos

- Node.js 20+
- pnpm 10+

### Instalação

1. Clone o repositório e instale as dependências:

```bash
pnpm install
```

### Executar Client

```bash
cd client
pnpm run dev
```

Acesse: http://localhost:3000

### Executar Admin

```bash
cd admin
pnpm run dev
```

Acesse: http://localhost:3000

## Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Autor

Desenvolvido como projeto de estudo de Next.js 15 e React 19.
