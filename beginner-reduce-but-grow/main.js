/* <h1> Beginner - Reduce but Grow </h1>
<h2> Codewars 8Kyu 4-7-22</h2>
<h3> Redo: 4-17-22, 4-28-22 </h3>
<p>
  Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
  
  
</p> */

//7-16-22
//PREP
//P: a array
//R: a value/number
//E: grow([1,2,3,4]) === 24
/*
P: function grow (x){
  use reduce method and multiply
}
*/
function grow(x){
  return x.reduce((acc, c) => acc * c )
}


//previous
function grow(x){
  return x.reduce( (acc, c) => acc*c, 1)
}

///FIRST TRYYYYY