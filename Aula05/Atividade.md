## 🧩 Atividade: Lâmpada - Ligar e Desligar

**Objetivo:** Praticar o uso do estado com `useState` para alternar entre lâmpada acesa e apagada.

### Instruções

1. Crie um componente chamado `Lampada` na pasta `src/components`.
2. O componente deve exibir uma imagem ou emoji de lâmpada apagada (💡) ou acesa (🔆).
3. Adicione um botão "Ligar" que, ao ser clicado, acende a lâmpada. Quando a lâmpada estiver acesa, o botão deve mostrar "Desligar" e, ao clicar, apagar a lâmpada.
4. Use o `useState` para controlar o estado (acesa ou apagada).
5. Estilize o componente usando CSS Modules.

### Exemplo de interface esperada

```
💡
[Ligar]
```
Ao clicar no botão:
```
🔆
[Desligar]
```

---

**Dica:** Use uma variável booleana para controlar o estado da lâmpada e altere o emoji e o texto do botão conforme