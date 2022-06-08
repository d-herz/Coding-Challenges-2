// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.


function stringy(size) {
  let arr = []
  for(let i = 1; i<=size; i++){
    if(i % 2=== 0){
        arr.push(0) 
    }else{
        arr.push(1)
    }
  }
  return arr.join('')
}


//interesting user sol
// function stringy(size) {
//   var str='';
//   for( var i=1; i<=size; i++ )
//     str+=i%2;
//   return str;
// }