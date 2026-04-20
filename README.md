# Playwright E2E Tests - Login e Produtos

Este projeto contém testes automatizados utilizando Playwright para validar:

* Login com credenciais válidas e inválidas
* Acesso à página de produtos
* Estrutura para validação dos títulos dos produtos

---

## Tecnologias utilizadas

* Node.js
* Playwright
* TypeScript

---

## Estrutura do projeto

```bash
tests/
  auth.setup.ts
  login.spec.ts
  products.spec.ts

playwright.config.ts
storageState.json
```

---

## Login automático

O arquivo `auth.setup.ts` realiza o login e salva a sessão em:

```bash
storageState.json
```

Isso permite acessar páginas autenticadas sem repetir o login em todos os testes.

---

## Testes implementados

### Login

* Login com credenciais válidas
* Login com credenciais inválidas
* Validação de erro de autenticação

### Produtos

* Acesso à página `inventory.html`
* Base para validação dos nomes dos produtos

---

## Configuração

No arquivo `playwright.config.ts`:

```ts
use: {
  storageState: 'storageState.json',
}
```

---

## Como executar

### 1. Instalar dependências

```bash
npm install
npx playwright install
```

### 2. Gerar sessão de login

```bash
npx playwright test auth.setup.ts
```

### 3. Rodar os testes

```bash
npx playwright test
```

---

## Observações

* O login automático evita repetição de código
* Os testes de login são separados para validar cenários reais
* Se a sessão expirar, execute novamente o `auth.setup.ts`

---

## Próximos passos

* Validar nomes dos produtos
* Testar ordenação
* Implementar Page Object Model
* Adicionar testes de carrinho

---

## Autor

Projeto criado para fins de estudo com Playwright.
