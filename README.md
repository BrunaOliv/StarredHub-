# 📌 Nome do Projeto

## 📖 Descrição
Este é um projeto desenvolvido em **React** que integra com a API do GitHub para exibir repositórios favoritados pelo usuário. Além disso, permite visualizar detalhes dos repositórios, incluindo suas issues abertas.

## 🚀 Funcionalidades
- Buscar e exibir repositórios favoritados
- Visualizar detalhes de um repositório
- Listar issues de um repositório

## 🛠️ Tecnologias Utilizadas
- **React**
- **React Router** (para navegação)
- **Axios** (para requisições HTTP)
- **Styled Components** (para estilização, se aplicável)

## 📡 API do GitHub Utilizada
A aplicação consome os seguintes endpoints da API do GitHub:

- **Listar detalhes de um repositório:**  
  `GET https://api.github.com/repos/{owner}/{repo}`

- **Listar issues de um repositório:**  
  `GET https://api.github.com/repos/{owner}/{repo}/issues`

## 📦 Instalação e Uso
### 🔧 Passo 1: Clonar o repositório
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 🔧 Passo 2: Instalar dependências
```bash
yarn install
# ou
npm install
```

### 🔧 Passo 3: Executar a aplicação
```bash
yarn start
# ou
npm start
```

A aplicação será executada em `http://localhost:3000/`.








