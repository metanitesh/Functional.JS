"use strict";

// Put your code here! :)
function getFnForNumber(num){
  return function(){
    return num
  }
}

function add(num1, num2){
  return num1 + num2
}




//reducer
function addN(arr){
  return arr.reduce((acc, val) => {
    return () => add2(acc, val)
  }, () => 0)()
}

//loop
function addNLoop(arr){

  let result = 0;
  for(let fn of arr){
    result = add2(fn, () => result)
  }
  return result
  
}

function add2(fn1, fn2){
  console.log(fn1, fn2)
  return add(fn1(), fn2())
}
//recursion
function addRecursion(arr){
  if(arr.length === 0){
    return () => 0
  }
  return () => add2(arr.pop(), addRecursion(arr))
}

const result = addRecursion([getFnForNumber(2), getFnForNumber(3), getFnForNumber(5), getFnForNumber(2), ])
console.log(result())

const arr = [1,2,3,2,3,2]
const result1 = arr.reduce((acc, num) => {
  if(!acc.includes(num)){
    acc.push(num)
  }
  return acc
}, [])

console.log(result1)