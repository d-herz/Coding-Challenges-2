/* <h1>Remove String Spaces</h1>

<h2> Codewars 8Kyu 4-12-22 </h2>
<h3> Redo: 5-2-22 </h3>

<p>
Simple, remove the spaces from the string, then return the resultant string.
</p> */


//7-17-22
function noSpace(x){
  return x.split(' ').join('')
}

//5-2-22 with arrow function syntax

const noSpace = x => x.split(' ').join('')

//fTTT 4-12-22
function noSpace(x){
  
  //  let arr = x.split(' ')
  // return arr.join('')
  //Refactored into simpler
  return x.split(' ').join('')
}