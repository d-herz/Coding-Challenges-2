/* <h1>Find numbers which are divisble by given number</h1>

<h2> Codewars 8Kyu 4-10-22 </h2>
<h3> Redo: 4-18-22, 4-27-22 </h3>

<p>

Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example
divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
  
  
</p> */

//7-17-22
function divisibleBy(numbers, divisor){
  
  return numbers.filter( x => x % divisor === 0)

}

//4-27-22 Same exact solution
//4-18-22 Solution, much improved!

function divisibleBy(numbers, divisor){
  return numbers.filter( x => x % divisor === 0)
}

//4-10-22 Solution
function divisibleBy(numbers, divisor){
  let arr = [];
 
  for( let i = 0; i<numbers.length; i++){
    if(numbers[i] % divisor === 0){
      arr.push(numbers[i])
    }
  }
  return arr
}

//got tripped up at first 
//was putting: arr.push(i), which was only giving an array of the index
//instead realized needs to be arr.push(numbers[i])