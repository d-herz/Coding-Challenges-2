// 6 kyu
// Duplicate Encoder
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

//string
//return a string of specified symbol '(' or ')'
// dupEnc(din) === '((('


function duplicateEncode(word){
  word = word.toLowerCase()
  let charMap = {}
  let retStr = ''
  
  for(let char of word){
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }
  console.log(charMap)

  for(let j=0; j< word.length; j++){
    if(charMap[word[j]] === 1){
      retStr += '('
    }else{
      retStr+= ')'
    }
  }
  console.log(retStr)
  return retStr
}

console.log(duplicateEncode('recede'))


//user solutions:
