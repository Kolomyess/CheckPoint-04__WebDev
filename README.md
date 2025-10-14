# 👥 Integrantes
    Nome	| RM
    Henrique Kolomyes Silveira	RM563467
    Matheus Santos de Oliveira	RM561982

<div align="center">

# 🎬 Mini Catálogo de Filmes com API (TMDB)
### React + TypeScript + Tailwind CSS  
**CheckPoint 04 & 05 — Web Development**


</div>

---

## 📖 Sobre o Projeto

Este repositório reúne os projetos dos **CheckPoints 04 e 05** da disciplina de **Desenvolvimento Web**.

O foco é consolidar conhecimentos em **React com TypeScript**, evoluindo de conceitos básicos para intermediários — com destaque na **integração com APIs**, **reutilização de componentes** e **estilização moderna com Tailwind CSS**.

---

## 🚀 CheckPoint 05 — React Intermediário e Integração com APIs

### 🎯 Objetivo
Aprofundar o uso do React com TypeScript, introduzindo:
- Comunicação com **APIs externas** (`fetch` ou `axios`);
- **Renderização condicional** e **listas dinâmicas**;
- **Hooks avançados** (`useState`, `useEffect`);
- **Organização modular** de componentes e pastas;
- Estilização **responsiva e moderna** com Tailwind CSS.

---

## 🧩 Projeto Didático — “Mini Catálogo de Filmes”

### 📝 Descrição
Criação de um **catálogo de filmes** consumindo dados diretamente da **API do TMDB (The Movie Database)**, exibindo uma lista com **filmes populares**, **busca por título**, e **cards responsivos** com informações básicas.

### 💡 Funcionalidades
- 🔍 **Busca por título** de filmes;  
- 🎬 **Cards dinâmicos** com pôster, título e data de lançamento;  
- 📡 **Consumo da API TMDB** via Axios;  
- 📱 **Layout responsivo**, adaptado para mobile e desktop;  
- 🧱 Estrutura modular e componentizada com **TypeScript**.

---

## 🧠 Conceitos Técnicos Aplicados

| Conceito | Descrição |
|-----------|------------|
| ⚛️ **Componentes & Props** | Reutilização e tipagem forte |
| 🎣 **Hooks (useState / useEffect)** | Controle de estado e ciclo de vida |
| 🧩 **Renderização condicional** | Exibição dinâmica baseada em estado |
| 🧮 **Listagem (map)** | Renderização iterativa de filmes |
| 📁 **Estrutura organizada** | Separação em `components`, `pages`, `services` |
| 🎨 **Tailwind CSS** | Estilização rápida e responsiva |
| 🌐 **API TMDB** | Comunicação com base de dados real de filmes |
| 🧱 **TypeScript** | Tipagem estática e código mais seguro |

---

## 🧰 Tecnologias Utilizadas

| Tecnologia | Finalidade |
|-------------|-------------|
| ⚛️ **React + TypeScript (Vite)** | Framework principal com tipagem |
| 🎨 **Tailwind CSS** | Estilização e responsividade |
| 🌐 **Axios** | Consumo da API TMDB |
| 🧰 **Node.js / npm** | Gerenciamento de dependências |
| 🧩 **TMDB API** | Fonte de dados dos filmes |

---
## 🔗 API utilizada
TMDB (The Movie Database)
📍 https://developer.themoviedb.org/

    import axios from "axios";

    const API_KEY = "981168ce8d9dcd0d06f9602de23db87e";

    const api = axios.create({
      baseURL: "https://api.themoviedb.org/3",
      params: {
        api_key: API_KEY,
      },
    });

    export default api;

## ⚙️ Como Executar o Projeto
    Clone o repositório
    git clone https://github.com/Kolomyess/CheckPoint-04__WebDev.git

    Acesse a pasta
    cd CheckPoint-04__WebDev

    Instale as dependências
    npm install tailwindcss @tailwindcss/vite
    npm install axios
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

    Execute o servidor local
    npm run dev


    O projeto será iniciado em:
    👉 http://localhost:5173

## 🧱 Boas Práticas Adotadas

Código limpo e comentado 🧼

Componentização e reutilização 📦

Responsividade mobile-first 📱

Separação lógica de camadas (UI, dados, API) 🧩

Organização de pastas seguindo padrão Clean React Structure 📁

## 🗂️ Estrutura de Pastas

```bash
src/
├── components/
│   ├── Header.tsx
│   ├── MovieCard.tsx
│   └── MovieList.tsx
├── pages/
│   └── Home.tsx
├── services/
│   └── api.ts
├── App.tsx
└── main.tsx

Componente	Função
App.tsx	Controla o estado global e renderiza a aplicação
Header.tsx	Contém a barra de busca e o título
MovieList.tsx	Renderiza a lista de filmes
MovieCard.tsx	Exibe informações individuais de um filme
api.ts	Centraliza o consumo da API do TMDB


