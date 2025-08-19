## Objetivo da Aula

O objetivo desta aula é apresentar os conceitos fundamentais de **componentização**, **props** e o uso de **module.css** no React. Você aprenderá como dividir a interface em componentes reutilizáveis, passar dados entre eles utilizando props e aplicar estilos de forma modular e isolada com module.css, tornando o desenvolvimento mais organizado e escalável.

---

## Conteúdo da Aula

### 1. Componentização

A componentização consiste em dividir a interface em pequenas partes independentes chamadas **componentes**. Cada componente é responsável por uma parte específica da interface, facilitando a reutilização, manutenção e organização do código.

**Vantagens:**
- Reutilização de código
- Facilidade de manutenção
- Organização do projeto

### 2. Props

**Props** (propriedades) são parâmetros que permitem a comunicação entre componentes. Elas possibilitam que um componente pai envie dados para um componente filho, tornando os componentes mais dinâmicos e flexíveis.

**Exemplo de uso:**
```jsx
// Componente Pai
<Perfil nome="João" idade={25} />

// Componente Filho
function Perfil(props) {
    return <p>{props.nome} - {props.idade} anos</p>;
}
```

### 3. module.css

O **module.css** permite aplicar estilos CSS de forma isolada a cada componente, evitando conflitos de nomes de classes e garantindo que o estilo de um componente não afete outros.

**Exemplo de uso:**
```jsx
import styles from './Perfil.module.css';

function Perfil() {
    return <div className={styles.container}>Conteúdo do perfil</div>;
}
```

---

## Resumo

Nesta aula, você vai aprender a:
- Criar componentes reutilizáveis
- Passar dados entre componentes usando props
- Aplicar estilos de forma modular com module.css

Esses conceitos são essenciais para o desenvolvimento eficiente de aplicações React modernas.
