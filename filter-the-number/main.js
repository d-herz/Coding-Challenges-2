// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

//PREP
//P: a string with a number inside it
//R: just return the number
//E: filterString("a1b2c3") === 123
/*
P: function filterString(value){
loop or check for includes?
}
*/

//10-9-22 BAD CODE (probably could have done more efficiently )

var filterString = function(value) {
  let num = []
  
  for(let i =0; i<value.length; i++){
    if(value[i] === '1'){
      num.push(1)
      console.log(1)
    }else if( value[i] === '2'){
      num.push(2)
    } else if( value[i] === '3'){
      num.push(3)
    }else if( value[i] === '4'){
      num.push(4)
    }else if( value[i] === '5'){
      num.push(5)
    }else if( value[i] === '6'){
      num.push(6)
    }else if( value[i] === '7'){
      num.push(7)
    }else if( value[i] === '8'){
      num.push(8)
    }else if( value[i] === '9'){
      num.push(9)
    }else if( value[i] === '0'){
      num.push(0)
    }
  }
  return +num.reduce((acc,c) => `${acc}${c}`)
}