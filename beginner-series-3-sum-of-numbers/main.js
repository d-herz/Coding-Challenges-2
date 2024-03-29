// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

//PREP
//P: two numbers
//R: sum of all integers between and including the 2 parameters
//E: getsum(1,0,) === (1+0=1)
/*  
function getSum(a,b){

}
*/

function getSum( a,b ){
  let arr = [];
   
  if (a<b){
    for(let i=a; i<=b; i++){
      arr.push(i)
    }
  }else if(a>b){
      for (let i=b; i<=a; i++){
        arr.push(i)
    }
  }else{
    return a
  }
  return arr ? arr.reduce((acc,c) => acc+c) : a
}