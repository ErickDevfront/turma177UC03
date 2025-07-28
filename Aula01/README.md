
# Aula 01 – Introdução ao React com Vite + Primeiro Componente

## 🎯 Objetivos da Aula

- Compreender o que é o React e suas vantagens.
- Entender o papel do Vite no desenvolvimento com React.
- Instalar e configurar um projeto React usando Vite.
- Criar e renderizar o primeiro componente funcional com JSX.

---

## 📘 O que é React?

React é uma **biblioteca JavaScript** criada pelo Facebook para construção de **interfaces de usuário (UI)** baseadas em componentes reutilizáveis.

### ✅ Vantagens:
- Baseado em **componentes reutilizáveis**
- Uso do **JSX** (JavaScript XML)
- Alto desempenho e **reatividade**
- Grande ecossistema e comunidade

---

## ⚡ O que é o Vite?

Vite é uma **ferramenta de build moderna** que oferece:

- Inicialização instantânea do projeto
- Atualizações super rápidas com **Hot Module Replacement (HMR)**
- Otimizações automáticas para ambiente de produção

---

## ⚙️ Criando o Projeto com Vite

### 1. Criação do projeto

```bash
npm create vite@latest meu-projeto-react
cd meu-projeto-react
npm install
```

> Durante a criação, será exibido um menu para escolher o framework. Selecione **React** e depois **JavaScript**.  
### 2. Instalação das dependências

```bash
npm install
```

### 2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

---


## 📁 Estrutura Inicial do Projeto

```
meu-projeto-react/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
├── package.json
└── ...
```

---

## 🧱 Criando o Primeiro Componente

### 1. Abra o arquivo `src/App.jsx` e edite o conteúdo:

```jsx
function App() {
  return (
    <div>
      <h1>Olá, React com Vite!</h1>
      <p>Este é o meu primeiro componente.</p>
    </div>
  );
}

export default App;
```

### 2. Acesse no navegador:

Abra [http://localhost:5173](http://localhost:5173) e veja a aplicação renderizando seu componente.

---

## 📚 Conceitos Fundamentais

### 🔹 JSX
Sintaxe que permite escrever HTML dentro do JavaScript.

```jsx
const elemento = <h1>Olá JSX!</h1>;
```

### 🔹 Componente Funcional
Função que retorna JSX e representa uma parte da interface.

```jsx
function Saudacao() {
  return <p>Bem-vindo!</p>;
}
```

### 🔹 Exportação e Importação
Permite reutilizar componentes em diferentes arquivos:

```jsx
// Saudacao.jsx
function Saudacao() {
  return <p>Olá!</p>;
}

export default Saudacao;
```

```jsx
// App.jsx
import Saudacao from './Saudacao';
```

---

## 💻 Desafio Prático

Crie um componente chamado `Mensagem.jsx` que exiba o texto:

> Seja bem-vindo ao mundo do React!

E utilize-o dentro do componente `App`.

```jsx
// src/components/Mensagem.jsx
function Mensagem() {
  return <p>Seja bem-vindo ao mundo do React!</p>;
}

export default Mensagem;
```

```jsx
// src/App.jsx
import Mensagem from './components/Mensagem';

function App() {
  return (
    <div>
      <h1>Olá, React com Vite!</h1>
      <Mensagem />
    </div>
  );
}

export default App;
```

---

## 📌 Tarefa-Chave – Aula 01

### 📝 Título: Criando seus primeiros componentes com React e Vite

#### 🛠️ Instruções

1. Crie um novo projeto com Vite:

   ```bash
   npm create vite@latest tarefa-aula01 -- --template react
   cd tarefa-aula01
   npm install
   npm run dev
   ```

2. Crie uma pasta chamada `components` dentro de `src`.

3. Crie 3 componentes funcionais:
   - `Cabecalho.jsx`: título com `<h1>Meu Primeiro Projeto React</h1>`
   - `Mensagem.jsx`: texto de boas-vindas
   - `Rodape.jsx`: seu nome e a data atual (com `new Date().toLocaleDateString()`)

4. Use os 3 componentes no `App.jsx`:

```jsx
import Cabecalho from './components/Cabecalho';
import Mensagem from './components/Mensagem';
import Rodape from './components/Rodape';

function App() {
  return (
    <div>
      <Cabecalho />
      <Mensagem />
      <Rodape />
    </div>
  );
}

export default App;
```

---

### ✅ Critérios de Avaliação

| Critério                                    | Pontos |
|--------------------------------------------|--------|
| Projeto criado corretamente com Vite       | 2 pts  |
| Componentes criados e organizados em `/components` | 2 pts  |
| Uso correto de JSX                         | 2 pts  |
| Componente `Rodape` exibindo data atual    | 2 pts  |
| Código limpo, indentado e funcional        | 2 pts  |
| **Total**                                   | **10 pts** |

---

### 📤 Entrega

- Enviar o link do repositório GitHub com o projeto ou um `.zip` com a pasta do projeto.

---

### 📅 Próxima Aula

- Criação de múltiplos componentes reutilizáveis
- Props e composição de interface com React

---
