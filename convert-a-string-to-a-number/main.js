/* <h1> Convert a String to a Number</h1>
<h2> Codewars 8kyu 4-28-22</h2>

<p>
  Note: This kata is inspired by Convert a Number to a String!. Try that one too.

Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
  
</p> */

//7-22-22
const stringToNumber = function(str){
  return +str
}

//basic 4-27-22
var stringToNumber = function(str){

  return Number(str)
}