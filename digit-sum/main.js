// So, your task is to sum up all the digits in string, possibly multiple times, till you get a one digit result. You should then return it as a string. The input will be always valid.

// For example:

// var str = '1234';
// digitSum(str);  //returns 1

// /* 1 + 2 + 3 + 4 = 10 <= this result doesn't have one digit => 1 + 0 = 1 */

// var str = '1011';
// digitSum(str);  //returns 3
// /* 1 + 0 + 1 + 1 = 3 <= this result does have one digit => 3 */

// var str = '2468';
// digitSum(str);  //returns 2
// /* 2 + 4 + 6 + 8 = 20 <= this result doesn't have one digit => 2 + 0 = 2 */
// Good luck!

//PREP
//P: a string
//R: a number as a string
//E: digitSum('1234') === 1
/*

P:  function digitSum(str){
  while loopage, array methods (split, map, reduced + joim)
}

*/
//Maybe could have used a do while loop to make the initial condition easier

function digitSum (str) {

  while(+str > 9){
    str = str.split('').map( x => +x ).reduce((acc,c) => acc+c,0).toString()
  }
  
  return str
}