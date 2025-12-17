# App Shop

Loja simples construída com Next.js (Pages Router) e TypeScript, integrada ao Stripe. O app lista produtos do Stripe, mostra detalhes do produto e cria sessões de checkout usando a API do Stripe.
## Stack principal

- Next.js (Pages) — versão definida em `package.json`.
- React 19 + TypeScript
- Stripe (SDK server-side)
- Keen-slider para carrossel de produtos
- Axios para chamadas cliente -> API

## Como rodar localmente

1. Instale dependências:

```powershell
npm install
```

2. Variáveis de ambiente (exemplo):

```powershell
#$env:STRIPE_SECRET_KEY = "sk_test_..."
#$env:NEXT_URL = "http://localhost:3000"
```

3. Rodar em modo desenvolvimento:

```powershell
npm run dev
```

Visite http://localhost:3000.

## Scripts úteis (package.json)

- `npm run dev` — inicia Next em dev.
- `npm run build` — build de produção.
- `npm start` — inicia servidor de produção (após build).
- `npm run lint` — lint do Next/ESLint.

## Variáveis de ambiente necessárias

- `STRIPE_SECRET_KEY` — chave secreta do Stripe (obrigatória no servidor).
- `NEXT_URL` — URL base usada para `success_url` e `cancel_url` no checkout.

## Fluxos importantes / arquivos chave

- `src/lib/stripe.ts` — inicializa o cliente Stripe; valida `STRIPE_SECRET_KEY`.
- `src/pages/index.tsx` — lista produtos (servidor) via `stripe.products.list({ expand: ['data.default_price'] })` e renderiza carrossel (`keen-slider`). Revalidação: 2 horas.
- `src/pages/product/[id].tsx` — recupera produto e `default_price`; revalidação: 1 hora; `getStaticPaths` usa `fallback: 'blocking'`.
- `src/pages/api/checkout.ts` — endpoint POST que cria `stripe.checkout.sessions.create` a partir de um `priceId` recebido no body e retorna `{ checkoutUrl }`.
- `next.config.ts` — inclui `images.domains = ['files.stripe.com']` para imagens do Stripe.

## Padrões e convenções do projeto

- Dados de produto: o código expande `default_price` para obter `unit_amount` e `price.id` (usado como `defaultPriceId`).
- Formatação de preço: sempre usar `Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })`.
- Navegação: Links para produto usam `prefetch={false}` para evitar pré-buscas de imagens.
- Checkout: o cliente faz `POST /api/checkout` com `{ priceId }` e redireciona para `checkoutUrl` retornado.

## Observações de deploy

- O projeto é compatível com deploy em Vercel. Garanta que `STRIPE_SECRET_KEY` e `NEXT_URL` estejam configuradas nas variáveis de ambiente do ambiente de produção.
- Se adicionar domínios de imagem externos, atualize `next.config.ts`.

## Tempos de revalidação

- Home (`index.tsx`): `revalidate: 60 * 60 * 2` (2 horas).
- Produto (`[id].tsx`): `revalidate: 60 * 60` (1 hora).

