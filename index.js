// Variáveis para armazenar o nome e XP do herói
const nomeDoHeroi = "Richard"; // Coloque o nome do herói
const xpDoHeroi = 8000; // Coloque aqui a quantidade de xp do Herói

// Estrutura de decisão para determinar o nível do herói
let nivelDoHeroi;

if (xpDoHeroi < 1000) {
  nivelDoHeroi = "Ferro";
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
  nivelDoHeroi = "Bronze";
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
  nivelDoHeroi = "Prata";
} else if (xpDoHeroi >= 6001 && xpDoHeroi <= 7000) {
  nivelDoHeroi = "Ouro";
} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
  nivelDoHeroi = "Platina";
} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
  nivelDoHeroi = "Ascendente";
} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
  nivelDoHeroi = "Imortal";
} else {
  nivelDoHeroi = "Radiante";
}

// Exibição da mensagem com o nível do herói
console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);