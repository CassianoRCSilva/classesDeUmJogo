class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }



    atacar() {
        let ataque = "";

    switch (this.tipo) {
      case "mago":
        ataque = "Magia";
        break;
      case "guerreiro":
        ataque = "Espada";
        break;
      case "monge":
        ataque = "Artes Marciais";
        break;
      case "ninja":
        ataque = "Shuriken";
        break;
      default:
        ataque = "Ataque Desconhecido";
        break;
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

    // Criando um novo herói
    const meuHeroi = new Heroi("DanteTrickster", 37, "guerreiro");
    meuHeroi.atacar();

    