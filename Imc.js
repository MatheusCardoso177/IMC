class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc(){
       return this.peso / (this.altura * this.altura )
    
    }
}
//new Pessoa Jose
const jose = new Pessoa('jose', 84, 1.75);
console.log(jose.calcularImc());

//new Pessoa Matheus
const matheus= new Pessoa('Matheus', 80, 1.77);
console.log(matheus.calcularImc());
