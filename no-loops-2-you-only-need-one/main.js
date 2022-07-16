/* <h1> No Loops 2 - You only need one </h1>

<h2>Codewars 8Kyu 4-4-22 (need to push to GH tonight)</h2>
<h3> Redo: 4-13-22, 4-29-22 </h3>

*** No Loops Allowed ***

You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

Looking for more, loop-restrained fun? Check out the other kata in the series:

https://www.codewars.com/kata/no-loops-1-small-enough

https://www.codewars.com/kata/no-loops-3-copy-within */

//7-16-22
//PREP
//P: an array (a) and a value (x)
//R: boolean (true or false)
//E: check([10], '6') === false
/*
P: function check(a,x){
    check if array includes value, without a loop
}
*/
function check(a,x){
  return a.includes(x)
 
};


// First trRYYYYYY 4-4-22

function check(a,x){
  
  return a.includes(x)
  
};

//4-13-22 redid same ans
//4-29-22 Same ans again