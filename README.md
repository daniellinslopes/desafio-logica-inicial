# 🛡️ Classificador de Nível de Herói

Este projeto foi desenvolvido como parte de um desafio de lógica de programação. O objetivo é criar um sistema que receba o nome e a experiência (XP) de um herói e determine o seu nível (ranking) com base numa escala pré-definida.

# 📝 Descrição

O programa utiliza estruturas fundamentais de programação para automatizar a classificação de personagens. Ao invés de utilizar uma sequência exaustiva de if/else, o código foi otimizado para percorrer uma lista de níveis, tornando-o mais fácil de manter e expandir.

# 🚀 Funcionalidades

• Interatividade via Terminal: Utiliza o módulo *readline* do Node.js para capturar dados do utilizador.

• Processamento por Loop: Percorre um array de objetos para validar os intervalos de XP.

• Escalabilidade: Fácil adição de novos níveis apenas alterando a estrutura de dados.

• Ciclo de Repetição: Permite classificar vários heróis sem precisar reiniciar o programa.

# 📊 Tabela de Classificação (XP/Nível)

Menor que 1.000

*Ferro*

Entre 1.001 e 2.000

*Bronze*

Entre 2.001 e 5.000

*Prata*

Entre 5.001 e 7.000

*Ouro*

Entre 7.001 e 8.000

*Platina*

Entre 8.001 e 9.000

*Ascendente*

Entre 9.001 e 10.000

*Imortal*

Maior ou igual a 10.001

*Radiante*

# 🛠️ Tecnologias

• JavaScript (ES6+)

• Node.js

# 💻 Como Executar

Para rodar este projeto localmente, é necessário ter o Node.js instalado no seu computador.

1. Clone o repositório:
   
   ```git clone https://github.com/daniellinslopes/desafio-logica-inicial.git```
   
3. Entre na pasta do projeto:
   
   ```cd desafio-logica-inicial```

5. Execute o script:
   
   ```node classificadorDeHeroi.js```
