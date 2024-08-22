# H3rmel ESLint + Prettier Config

Configuração pronta para ESLint + Prettier criada para uso em meus projetos pessoais.

## O que está incluído?

Configuração pronta para ESLint contendo os seguintes plugins:

- React
- React Hooks
- Import Helpers
- JSX a11y

Configuração pronta para Prettier contendo os seguintes plugins:\

- Prettier TailwindCSS

## Setup

Como instalar e utilizar a configuração pré-pronta:

### React

Instale a configuração:

```bash
npm install --save-dev @h3rmel/lint-config
```

E adicione-a no arquivo do seu ESLint:

```js
// .eslintrc.json
{
  "extends": "@h3rmel/lint-config/modules/react"
}
```

### NextJS

Instale a configuração:

```bash
npm install --save-dev @h3rmel/lint-config
```

E adicione-a no arquivo do seu ESLint:

```js
// .eslintrc.json
// .eslintrc.json
{
  "extends": "@h3rmel/lint-config/modules/next",
  "next/core-web-vitals",
  "next"
}
```

### Prettier

Instale a configuração:

```bash
npm install --save-dev @h3rmel/lint-config
```

E adicione-a no arquivo do seu Prettier:

```rc
@h3rmel/lint-config/modules/prettier
```
