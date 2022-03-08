

var listaDePecas = ["amortecedor", "motor", "filtro do ar"]

let peso = 100;
if (peso < 100 ) {
    console.log(" a peça deve pesar no minimo 100g")
} else {
    console.log(" a peça possui peso adequando")
}

//caixa suporta ate 10

if(listaDePecas.length < 10) {
    console.log("É possivel cadastrar mais peças")
} else{
    console.log(" Não tem mais espaço na lista")
}


let nomePeca = "disco de freio"
if (nomePeca.length > 3) {
    console.log("nome da peça esta adequado para cadastro")
} else if (nomePeca == 0) {
    console.log("nome da peça não pode ser vazio")
} else {
    console.log(" o nome deve ter mais de 3 caractere, digite um nome adequado")
}
