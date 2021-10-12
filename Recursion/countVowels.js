const vowels = ['a', 'e', 'i', 'o', 'u'];
let str = "the quick brown fox jumps over the lazy dog"

function countVowel(str){
  
  // const char = str.slice(0, 1)
  let first
  str = str.slice(1)

  if(str.length === 0){
    return 0
  }
  if(vowels.includes(str[0])){
    first = 1
  }else{
    first = 0
  }

  return first + countVowel(str)
}

// countVowel

console.log(countVowel(str))


