# E-commerce UI

Um projeto de interface de usuário para e-commerce desenvolvido com Next.js e React.

## Descrição

Este é um projeto de interface moderna para uma loja online (e-commerce). O projeto inclui componentes reutilizáveis para exibição de produtos, navegação, busca e layout geral da aplicação.

## Tecnologias Utilizadas

- Next.js 15.4.5
- React 19.1.0
- TypeScript
- Tailwind CSS 4
- Lucide React (ícones)

## Funcionalidades

- Lista de produtos com cards informativos
- Exibição de nome, descrição, preços e imagens dos produtos
- Seleção de tamanhos e cores
- Barra de navegação e busca
- Sistema de categorias
- Layout responsivo
- Footer com informações da loja

## Estrutura do Projeto

O código principal está localizado na pasta `client/`:
- `src/components/` - Componentes React reutilizáveis
- `src/app/` - Páginas e rotas da aplicação
- `src/types.ts` - Definições de tipos TypeScript

## Como Executar

1. Navegue até a pasta do cliente:
```bash
cd client
```

2. Instale as dependências:
```bash
pnpm install
```

3. Execute o servidor de desenvolvimento:
```bash
pnpm dev
```

4. Abra o navegador e acesse:
```
http://localhost:3000
```

## Scripts Disponíveis

- `pnpm dev` - Inicia o servidor de desenvolvimento
- `pnpm build` - Gera a versão de produção
- `pnpm start` - Inicia o servidor de produção
- `pnpm lint` - Executa o linter para verificar o código

## Componentes Principais

- **ProductCard** - Cartão de produto com imagem, detalhes, seleção de tamanho/cor e botão de adicionar ao carrinho
- **ProductList** - Lista de produtos disponíveis
- **Navbar** - Barra de navegação principal
- **SearchBar** - Barra de busca
- **Categories** - Categorias de produtos
- **Footer** - Rodapé da aplicação

## Tipo de Produto

Os produtos seguem uma estrutura definida com os seguintes campos:
- ID único
- Nome
- Descrição curta e completa
- Preço
- Tamanhos disponíveis
- Cores disponíveis
- Imagens (uma para cada cor)
