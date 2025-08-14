const produtos = [
    {
        id: 1,
        img: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F369658%2Ffonte-msi-mag-a650bn-atx-650w-80-plus-bronze-pfc-ativo-entrada-bivolt-preto-306-7zp2b22-ce0_1665770996_m.jpg&w=256&q=75",
        name: "Fonte MSI MAG A650BN, 650W, 80 Plus Bronze, PFC Ativo, Com Cabo, Preto - 306-7ZP2B22-CE0",
        price: "R$ 319,99",
        description: "Arquitetura de 650W com PFC Ativo para performance superior. Design de circuito DC para DC que funciona em tipos de sistemas variados.Desempenho ideal para aplicações de jogos, fornecendo energia estável. Ventilador de 120mm com baixo ruído e recomendações de refrigeração eficientes.Certificação 80 PLUS Bronze que oferece tecnologias especiais para menor consumo de energia.",
        emPromocao: true
    },
    {
        id: 2,
        img: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F172366%2Fmemoria-kingston-fury-beast-16gb-3200mhz-ddr4-cl16-preto-kf432c16bb1-16_1626271100_m.jpg&w=256&q=75",
        name: "Memória RAM Kingston Fury Beast, 16GB, 3200MHz, DDR4, CL16, Preto - KF432C16BB1/16",
        price: "R$ 259,99",
        description: "Arquitetura DDR4 com frequência de 3200MHz, ideal para sistemas de alta performance.Projetada para funcionar com Intel XMP 2.0, otimizando o desempenho em diversos sistemas. Módulo de 16GB testado para baixa latência (CL16) com timings de 16-20-20 a 1.35V, adequado para aplicações exigentes. Dissipador de calor integrado de 34mm para otimizar a dissipação térmica e manter a eficiência energética.Tecnologia Plug-N-Play (PnP) para fácil instalação e configuração, além de contatos de ouro para conexão duradoura.",
        emPromocao: true

    },
    {
        id: 3,
        img: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F85198%2F85198_1484306114_m.jpg&w=256&q=75",
        name: "SSD Kingston A400, 480GB, SATA III, 2.5, Leitura: 500MB/s, Gravação: 450MB/s, Preto - SA400S37/480G",
        price: "R$ 259,99",
        description: "Especificações Técnicas: Arquitetura otimizada para proporcionar tempos de inicialização e transferência de dados mais rápidos.Compatibilidade: Compatível com sistemas que utilizam a interface SATA, permitindo uma fácil substituição de discos rígidos tradicionais.Performance e Benchmarks: Apresenta velocidades de leitura de até 500MB/s e gravação de até 450MB/s, resultando em um desempenho até 10x superior em comparação com HDDs convencionais.Refrigeração e Energia: Possui operação mais fria e silenciosa, com alta resistência a choques e vibrações, tornando-o adequado para uso em notebooks e dispositivos móveis.Recursos Avançados: Fabricado com memória Flash, o que aumenta a confiabilidade e durabilidade, reduzindo a probabilidade de falhas em comparação com discos rígidos mecânicos.",
        emPromocao: false
    },
    {
        id: 4,
        img: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F153650%2Fcooler-fan-rise-mode-black-120mm-rm-bk-01-fb_1658161363_m.jpg&w=256&q=75",
        name: "Ventoinha Rise Mode, 120mm, Preto - RM-BK-01-FB",
        price: "R$ 6,99",
        description: "Design Gaming: Estética elegante com iluminação sutil criada para complementar setups gamers.Ergonomia e Conforto: Dimensões compactas para fácil instalação e otimização do espaço interno do PC.Materiais e Resistência: Fabricado com materiais de alta durabilidade para garantir longa vida útil e desempenho consistente.Funcionalidades Especiais: Desempenho balanceado para manter a temperatura ideal do sistema sem gerar ruídos excessivos.Compatibilidade Setup: Integração perfeita com a maioria dos gabinetes e sistemas de resfriamento disponíveis no mercado.",
        emPromocao: true
    },
    {
        id: 5,
        img: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F165133%2Fplaca-mae-asus-tuf-gaming-a520m-plus-ii-amd-am4-matx-ddr4-preto-90mb17g0-m0eay0_1736968906_m.jpg&w=256&q=75",
        name: "Placa-Mãe ASUS TUF GAMING A520M-PLUS II, AMD AM4, mATX, DDR4, Preto - 90MB17G0-M0EAY0",
        price: "R$ 6,99",
        description: "Arquitetura otimizada para processadores AMD Ryzen série 5000/4000 G e 3000, oferecendo desempenho superior em jogos e aplicações exigentes. Compatível com soquete AM4, suportando uma ampla gama de processadores AMD Ryzen para flexibilidade na escolha do hardware. Desempenho aprimorado com Stack Cool 3+, que dissipa o calor de componentes críticos, mantendo a temperatura ideal e permitindo overclocking.Solução de resfriamento abrangente com dissipador de calor VRM, dissipador de calor PCH e Fan Xpert 2+ para otimizar a refrigeração e o fornecimento de energia.Equipada com TUF LANGuard e Turbo LAN para otimizar a rede, reduzir o lag e garantir uma experiência online mais fluida.",
        emPromocao: true
    }

]

export default produtos;

// id → identificador único.
// img → URLda imagem do produto.
// name → nome do produto.
// price → preço do produto.
// description → descrição breve do produto.
// emPromocao → booleano que indica se o produto está em promoção