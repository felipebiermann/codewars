// //Quem se lembra de seu tempo no pátio da escola, quando as meninas pegavam uma flor e rasgavam suas pétalas, dizendo cada uma das seguintes frases cada vez que uma pétala era rasgada:

// Eu te amo
// um pouco
// muito
// apaixonadamente
// loucamente
// de jeito nenhum
// Quando a última pétala foi rasgada, houve gritos de excitação, sonhos, pensamentos e emoções surgindo.

// Seu objetivo neste kata é determinar qual frase as meninas diriam para uma flor de um determinado número de pétalas, onde nb_petals > 0.

function howMuchILoveYou(nbPetals) {
    const frasesMatriz = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
console.log(frasesMatriz[4])

  //se o numero de petalas for menor que 7 return frasesMatriz[nbPetals-1]
  //se o numero de petalas for maior que 7 return frasesMatriz[nbPetals-6]
  if (nbPetals < 7){
    console.log(frasesMatriz[nbPetals-1])
    return frasesMatriz[nbPetals-1]
  }
    else if (nbPetals % 6 == 0){
      console.log(frasesMatriz[(nbPetals % 6)+5])
    }
    else {
  console.log((nbPetals % 6)+ "esse é o resto da divisão do numero recebido dividido por 6")//quando nbPetals = 7 resultado é igual a 1.
      
  console.log(frasesMatriz[(nbPetals % 6)-1])
  }
}

howMuchILoveYou(19)