/* <h1> Convert an array of strings to an array of numbers </h1>
<h2> Codewars 7kyu 4-14-22</h2>
<h3> Collection 4</h3>
<h4> Redo: 5-3-22 </h4>


<p>Some really funny web dev gave you a sequence of numbers from    his API response as an sequence of strings!

  You need to cast the whole array to the correct type.

  Create the function that takes as a parameter a sequence of       numbers represented as strings and outputs a sequence of         numbers.

  ie:["1", "2", "3"] to [1, 2, 3]

  Note that you can receive floats as well.
</p> */

//7-19-22
function toNumberArray(stringarray){
  return stringarray.map(x => +x)
}

//also tried arrow function expressions
 const toNumberArray = (stringarray) => {
  return stringarray.map(x => +x)
}


//5-3-22 Solution, using Unary operator
function toNumberArray(stringarray){
  return stringarray.map( x => +x)
}

//4-14-22 Solution, FIRST FKN TRY
function toNumberArray(stringarray){
  return stringarray.map( x => Number(x))
}