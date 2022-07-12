/* <h1> Return Negative </h1>


<h2> Codewars 8Kyu Kata 3/23/22 </h2>

<p>
  In this simple assignment you are given a number and have to      make it negative. But maybe the number is already negative?

  redid: 4-4-22, 4-20-22
</p> */

//7-12-22
function makeNegative(num) {
  return num > 0 ? -num : num
}

// 4-20-22
function makeNegative(num) {
  return num > 0 ? -num : num; 
}

//first time succesfully using ternary operator :D

//4-4-22
function makeNegative(num) {
  
  return num > 0 ? -num : num
  
//   if(num > 0){
//     return -num
//   }else{
//     return num
//   }
}
