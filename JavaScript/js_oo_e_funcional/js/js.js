//poo

var aluno = {
    nome: "Alessandro",
    idade: "27",
    fun: function(){
        console.log("o nome do aluno é " + this.nome + " e a idade é"+this.idade);
    }
}

console.log(aluno);
aluno.fun();