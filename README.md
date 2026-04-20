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
  login.spec.ts
  products.spec.ts

playwright.config.ts
```

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

## Como executar

### 1. Instalar dependências

```bash
npm install
npx playwright install
```
### 2. Rodar os testes

```bash
npx playwright test
```

---

## Próximos passos

* Validar nomes dos produtos
* Testar ordenação
* Implementar Page Object Model
* Adicionar testes de carrinho

---

## Autor

Projeto criado para fins de estudo com Playwright.
