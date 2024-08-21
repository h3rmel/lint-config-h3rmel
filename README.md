# H3rmel ESLint + Prettier Config

Configuração pronta para ESLint + Prettier criada para uso em meus projetos pessoais.

## O que está incluído?

A configuração contempla os seguintes pontos:

- Plugins: React, React Hooks, Import Helpers, Prettier e JSX a11y;
- Configuração base destes mesmos plugins

## Setup

Como instalar e utilizar a configuração pré-pronta:

### React

Instale a configuração:

```bash
npm install --save-dev @h3/eslint-config
```

E adicione-a no arquivo do seu ESLint:

```json
// .eslintrc.json
{
  "extends": "@h3/eslint-config/modules/react"
}
```

### NextJS

Instale a configuração:

```bash
npm install --save-dev @h3/eslint-config
```

E adicione-a no arquivo do seu ESLint:

```json
// .eslintrc.json
{
  "extends": "@h3/eslint-config/modules/next",
  "next/core-web-vitals",
  "next"
}
```