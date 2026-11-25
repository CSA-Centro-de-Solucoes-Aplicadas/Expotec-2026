# Login do painel `/admin` (Sveltia CMS)

O painel entra pelo **login do GitHub**. Como o repositório é privado, só quem tem
acesso de escrita a `CSA-Centro-de-Solucoes-Aplicadas/Expotec-2026` consegue editar.
Para dar acesso a alguém, basta convidar a pessoa como colaboradora do repositório.

O painel utiliza o **Sveltia CMS** (sucessor moderno e de alta performance do Decap/Netlify CMS).

---

## Passo a passo (Configuração inicial do OAuth)

1. **Deploy do proxy**: em <https://github.com/sveltia/sveltia-cms-auth> use o botão
   *Deploy to Cloudflare Workers*. A URL configurada é:
   `https://sveltia-cms-auth.ermesson2k8and.workers.dev`
2. **Registrar o OAuth App no GitHub** (Settings → Developer settings → OAuth Apps):
   - Homepage URL: o endereço do site
   - Authorization callback URL: `https://sveltia-cms-auth.ermesson2k8and.workers.dev/callback`
3. **Variáveis do Worker** (Cloudflare → Worker → Settings → Variables):
   - `GITHUB_CLIENT_ID` e `GITHUB_CLIENT_SECRET` (criptografe o secret)
   - `ALLOWED_DOMAINS`: os domínios autorizados
4. Acesse `/admin`: clique em *Sign in with GitHub*.

---

## Estrutura da Programação

- Cada atividade fica armazenada em seu próprio arquivo individual em `frontend/src/content/atividades/{id}.json`.
- Isso permite que várias pessoas da comissão editem e publiquem diferentes atividades simultaneamente sem causar conflitos de versão (*fast-forward*).
- O Sveltia CMS possui salvamento de rascunhos local e filtros rápidos por dia (Quarta, Quinta, Sexta).
