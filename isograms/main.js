// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)



//10-3-22
//Prep
//P:string
//R: boolean (t or f)
//E: isIsogram('aba')=== false
/* P: function isIsogram(str){
  idk, double loop?
}
*/

function isIsogram(str){
  let lc = str.toLowerCase() 
  
  let check = lc.split('').filter((x,i,a) => a.indexOf(x) === i).join('')
  
  return lc === check ? true : false ;
  
}

isIsogram('bard')