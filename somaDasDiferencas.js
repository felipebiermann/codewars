// //Sua tarefa é somar as diferenças entre pares consecutivos na matriz em ordem decrescente.

// Exemplo
// [2, 1, 10]  -->  9
// Por ordem decrescente:[10, 2, 1]

// Soma:(10 - 2) + (2 - 1) = 8 + 1 = 9

// Se a matriz estiver vazia ou a matriz tiver apenas um elemento, o resultado deve ser 0( Nothingem Haskell ).

function sumOfDifferences(arr) {
    let novoArray = arr.sort((a, b) => b - a)
     
   let valorDaSoma = 0;
   let valorDaDiferenca = 0
     for(let i=0; i<novoArray.length-1; i++){
       valorDaDiferenca = novoArray[i] - novoArray[i+1];
       valorDaSoma = valorDaSoma + valorDaDiferenca
   }
    console.log(valorDaSoma)
     return valorDaSoma
     //colocar a matriz em ordem decrescente
   }