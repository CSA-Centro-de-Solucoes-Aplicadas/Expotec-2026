# Login do painel `/admin` (Decap CMS)

O painel entra pelo **login do GitHub**. Como o repositório é privado, só quem tem
acesso de escrita a `CSA-Centro-de-Solucoes-Aplicadas/Expotec-2026` consegue editar.
Para dar acesso a alguém, basta convidar a pessoa como colaboradora do repositório.

O GitHub não deixa o navegador trocar o código de login por um token sozinho, então
fora do Netlify é preciso um pequeno proxy OAuth. O mais simples é um Cloudflare Worker.

## Passo a passo (uma vez só)

1. **Deploy do proxy**: em <https://github.com/sveltia/sveltia-cms-auth> use o botão
   *Deploy to Cloudflare Workers*. Anote a URL, algo como
   `https://sveltia-cms-auth.SEU-SUBDOMINIO.workers.dev`.
2. **Registrar o OAuth App no GitHub** (Settings → Developer settings → OAuth Apps → New):
   - Homepage URL: o endereço do site
   - Authorization callback URL: `<URL-DO-WORKER>/callback`
   - Gere um *Client secret* e copie o *Client ID* e o secret.
3. **Variáveis do Worker** (Cloudflare → Worker → Settings → Variables):
   - `GITHUB_CLIENT_ID` e `GITHUB_CLIENT_SECRET` (criptografe o secret)
   - `ALLOWED_DOMAINS`: o domínio do site (ex.: `expotec.exemplo.br`)
4. **Descomente `base_url`** em `frontend/public/admin/config.yml` com a URL do Worker.
5. Faça deploy do site e abra `/admin`: clique em *Login with GitHub*.

## Desenvolvimento local

`local_backend: true` só vale em `localhost`. Rode `npx decap-server` em outro terminal
e abra `http://localhost:5173/admin/`: o painel edita os arquivos direto, sem login.

## Observações

- A hospedagem precisa servir `/admin/` como arquivos estáticos (não reescrever para o `index.html` do Vue).
- O botão *Publicar* cria um commit direto em `main`, então cada salvamento dispara um novo deploy.

## Só local (sem login, sem Cloudflare)

Na pasta `frontend`, rode `npm run dev:cms` e abra `http://localhost:5173/admin/`.
Isso sobe o site e o `decap-server` juntos. O `decap-server` precisa rodar na raiz do repositório
(por isso o script faz `cd ..`), porque os caminhos do `config.yml` começam em `frontend/`.
As edições gravam direto nos arquivos; depois é só dar commit e push.
