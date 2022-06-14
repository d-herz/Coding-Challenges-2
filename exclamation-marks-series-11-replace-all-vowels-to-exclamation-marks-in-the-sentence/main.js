// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"


function replace(s){
  
  let str = ''
  
  for(let i = 0; i<s.length; i++){
   s = s.replace('i',"!")
    s = s.replace('e',"!")
    s = s.replace('a',"!")
    s = s.replace('o',"!")
    s = s.replace('u',"!")
    s = s.replace('A',"!")
    s = s.replace('E',"!")
    s = s.replace('I',"!")
    s = s.replace('O',"!")
    s = s.replace('U',"!")
  } 
  return s
}

//user solution using regex

function replace(s){
  return s.replace(/[aeoiu]/ig, '!')  
}