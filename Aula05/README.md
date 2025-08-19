# Aula 05 - Introdução ao State com useState

## 🎯 Objetivos da Aula
- Entender o conceito de **estado** em React.
- Aprender a utilizar o **Hook useState**.
- Criar componentes interativos que mudam com base no estado.

---

## 📖 Conceitos Fundamentais

### O que é estado?
O **estado (state)** é uma forma de armazenar informações dentro de um componente React que podem mudar ao longo do tempo.  
Quando o estado muda, o componente **é re-renderizado** automaticamente, exibindo a nova informação.

Exemplo de situações que usam estado:
- Contador que aumenta ou diminui.
- Formulário que guarda o texto digitado.
- Alternância de tema claro/escuro.

### O que é useState?
O **useState** é um Hook do React que permite adicionar estado a componentes funcionais.

```jsx
import { useState } from "react";

function Exemplo() {
  const [valor, setValor] = useState(0);

  return (
    <div>
      <p>O valor atual é: {valor}</p>
      <button onClick={() => setValor(valor + 1)}>Aumentar</button>
    </div>
  );
}
```

Explicação:
- `const [valor, setValor] = useState(0)`  
  - `valor` → variável que guarda o estado.  
  - `setValor` → função que altera o estado.  
  - `0` → valor inicial do estado.

---

## 🛠️ Passo a Passo

1. Criar o projeto com Vite (caso não tenha criado ainda):

```bash
npm create vite@latest meu-projeto-react
cd meu-projeto-react
npm install
npm run dev
```

2. Criar o componente **Contador.jsx** dentro de `src/components`:

```jsx
import { useState } from "react";
import styles from "./Contador.module.css";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div className={styles.container}>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>➕ Aumentar</button>
      <button onClick={() => setContador(contador - 1)}>➖ Diminuir</button>
      <button onClick={() => setContador(0)}>🔄 Resetar</button>
    </div>
  );
}

export default Contador;
```

3. Criar o arquivo de estilo **Contador.module.css**:

```css
.container {
  text-align: center;
  padding: 20px;
  border: 2px solid #333;
  border-radius: 10px;
  max-width: 300px;
  margin: 20px auto;
}

button {
  margin: 5px;
  padding: 10px 15px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}
```

4. Importar o componente no **App.jsx**:

```jsx
import Contador from "./components/Contador";

function App() {
  return (
    <div>
      <h1>Projeto React - Aula 03</h1>
      <Contador />
    </div>
  );
}

export default App;
```

---

## 📝 Exercício-Chave da Aula

👉 Crie um componente chamado **LikeButton** que tenha:
- Um texto exibindo a quantidade de likes.
- Um botão que aumenta o número de likes cada vez que for clicado.
- Estilização com CSS Modules.

Exemplo esperado:
```
👍 Likes: 0
[Curtir]
```

Ao clicar em "Curtir":
```
👍 Likes: 1
[Curtir]
```

---

## 🚀 Desafio Extra
Implemente um botão **"Descurtir"** que diminui o número de likes, mas não deixe o valor ficar abaixo de zero.
