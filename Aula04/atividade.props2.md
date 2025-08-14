
# 📝 Atividade — Catálogo de Produtos com Props e Map

## 🎯 Objetivo
Praticar o uso de **props** e **map()** no React para criar componentes dinâmicos a partir de dados armazenados em um arquivo que simula um **banco de dados**.

---

## 📂 Estrutura de pastas sugerida
```
src/
 ├─ components/
 │   ├─ Header.jsx
 │   ├─ ProductCard.jsx
 │   ├─ Main.jsx
 │   ├─ Footer.jsx
 ├─ data/
 │   └─ produtos.js
 ├─ App.jsx
 └─ main.jsx
```

---

## 📌 Requisitos da atividade
1. Criar um arquivo `produtos.js` na pasta `data/` com um array de objetos simulando um banco de dados de produtos.
2. Cada objeto deve conter:
   - `id` → identificador único.
   - `img` → URL da imagem do produto.
   - `name` → nome do produto.
   - `price` → preço do produto.
   - `description` → descrição breve do produto.
   - `emPromocao` → booleano que indica se o produto está em promoção.
3. Criar o componente `ProductCard` que receba via **props** todos os dados acima e renderize:
   - Imagem do produto.
   - Nome, descrição e preço formatado.
   - Um **badge** “Promoção!” quando `emPromocao` for `true`.
4. No componente `Main`, importar o array de produtos e usar **map()** para gerar um `ProductCard` para cada item.
5. Criar `Header` e `Footer` simples para estruturar a página.
6. Usar **CSS Modules** para estilizar os componentes.

---

## 📚 Conceitos trabalhados
- Passagem de dados via **props**.
- Renderização dinâmica com **map()**.
- Separação de dados em arquivo próprio (simulando banco de dados).
- Estilização modularizada com **CSS Modules**.
- Renderização condicional usando props booleanas.

---
