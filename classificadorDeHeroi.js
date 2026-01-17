const readline = require('readline/promises'); 
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

const ranks = [
    { name: "Ferro", max: 1000 },
    { name: "Bronze", max: 2000 },
    { name: "Prata", max: 5000 },
    { name: "Ouro", max: 7000 },
    { name: "Platina", max: 8000 },
    { name: "Ascendente", max: 9000 },
    { name: "Imortal", max: 10000 },
    { name: "Radiante", max: Infinity }
];

async function classificarHeroi() {
    let continuar = true;

    while (continuar) {
        console.log("\n--- Classificador de Herói ---");
        
        const heroName = await rl.question("Digite o nome do herói: ");
        const inputXp = await rl.question(`Qual o XP de ${heroName}? `);
        const heroXp = Number(inputXp);

        let level = "";

        for (const rank of ranks) {
            if (heroXp <= rank.max) {
                level = rank.name;
                break;
            }
        }

        console.log(`\nO Herói de nome **${heroName}** está no nível de **${level}**`);

        const resposta = await rl.question("\nDeseja classificar outro? (s/n): ");
        if (resposta.toLowerCase() !== 's') {
            continuar = false;
        }
    }

    console.log("Programa encerrado. Até mais!");
    rl.close(); 
}

classificarHeroi();