/* <h1> Sum Mixed Array </h2>
<h2> Codewars 8Kyu 4-12-22 </h2>
<h3> Redo: 5-3-22 </h3>

<p>

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

</p> */

//7-19-22
function sumMix(x){
 
  return x.map( x=> +x).reduce( (acc, c) => acc+ c)
}

// 5-3-22
//2 different solutions today:
//1st tried chaining the methods

function sumMix(x){
//could have use unary operator (+) instead of Number
  return x.map( x => Number(x)).reduce( (acc, c) => acc+c, 0)  
}

//2nd tried arrow syntax for hehaws

const sumMix = x => x.map( x => Number(x)).reduce( (acc, c) => acc+c, 0)





// 4-12-22
function sumMix(x){
  
  let  num = x.map( x => Number(x) )
  
  return num.reduce( (acc, c) => acc+c, 0)

}