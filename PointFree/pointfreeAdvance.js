function isOdd(num){
  return num % 2 === 1
}

function mod(y){
  return function(x){
    return x % y 
  }
}

function eq(y){
  return function(x){
    return x === y
  }
}

const compose = function(f1, f2){
  return function(num){
    return f1(f2(num))
  }
}

const mod2 = mod(2)
const eq1 = eq(1)


const isOddFunctional = compose(eq(1), mod(2))
console.log(isOddFunctional(33))
