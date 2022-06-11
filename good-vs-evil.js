function goodVsEvil(good, evil){
  const goodWorth = [1, 2 , 3 , 3 , 4 , 10]
  const evilWorth = [1, 2 , 2 , 2 , 3 , 5 , 10]
  const goods = good.split(" ")
  const evils = evil.split(" ")
  const resultGood = goods.reduce((acc, currentElement, index) => {
    return acc  +  (currentElement * goodWorth[index])
  }, 0)
  const resultEvil = evils.reduce((acc, currentElement, index) => {
    return acc + (currentElement * evilWorth[index])
  }, 0)
  if ( resultGood > resultEvil) {
    return "Battle Result: Good triumphs over Evil"
  } else if( resultEvil > resultGood ) {
    return "Battle Result: Evil eradicates all trace of Good"
  } else {
    return "Battle Result: No victor on this battle field"
  }
}
