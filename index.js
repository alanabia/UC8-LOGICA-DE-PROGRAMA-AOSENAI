// variavel, seu valor pode ser alterado no decorrer do programa
//let nomeEstudante = "helena";
//console.log(nomeEstudante);

//constante, seu valor nao pode ser alterado
//const nomeDoEstudante ="helena";
//console.log(nomeDoEstudante);

//em outras linguagens, portanto voce encontrara algo semelhante a:
//string: nomeEstudante ="helena";





//let listaDeEstudantes =["helena", "chico", "mario"];
//let quantidadeDeEstudantes = listaDeEstudantes.length;

//for (let indice = 0; indice < quantidadeDeEstudantes; indice ++) {
  //  const alunoCorrente = listaDeEstudantes[indice];
   // console.log(alunoCorrente)
//}



//com o do

//let listaDeEstudantes = ["helena", "chico", "mario"];
//let quantidadeDeEstudantes = listaDeEstudantes.length;
//let inicio = 0;
//do{
  //  console.log(listaDeEstudantes[inicio]);
    //inicio ++;
//} while (inicio < quantidadeDeEstudantes);


//com o while

//let listaDeEstudantes = ["helena", "chico", "mario"];
//let quantidadeDeEstudantes = listaDeEstudantes.length;
//let inicio = 0;

//while(inicio < quantidadeDeEstudantes){
  //  console.log(listaDeEstudantes[inicio]);
    //inicio++
//}

//for (let numero = 1; numero <= 10; numero ++){
  //  console.log(numero);
//}

//let listaDeEstudantes = ["helena", "chico", "mario"];
//let quantidadeDeEstudantes = listaDeEstudantes.length;

//listaDeEstudantes.push("jose");
//console.log(listaDeEstudantes);

let listaDeEstudantes = ["helena","chico", "mario", "jose", "maria"];
let quantidadeDeEstudantes = listaDeEstudantes.length;
if(quantidadeDeEstudantes < 5){
    listaDeEstudantes.push("joao");
    console.log(listaDeEstudantes);
} else{
    console.log("nao e possivel inserir mais alunos nessa turma");
}
     
