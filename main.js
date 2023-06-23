function Jogo(nome, genero) {
    this.nome = nome;
    this.genero = genero;
}

function RPG(nome) {
    Jogo.call(this, nome, "RPG");
}

function FPS(nome) {
    Jogo.call(this, nome, "FPS")
}

const csgo = new FPS("CS:GO");
const skyrim = new RPG("The Elder Scrolls V: Skyrim");
const jogo1 = new Jogo("GTAV", "ação");

console.log(jogo1);
console.log(csgo);
console.log(skyrim);