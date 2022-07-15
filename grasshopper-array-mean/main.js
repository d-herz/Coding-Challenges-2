/* <h1> Grasshopper - Array Mean </h1>

<h2> Codewars Kaya 8Kyu 3/28/22 </h2>
<h3> Redo: 4/26/22</h3>

<p>Find Mean
Find the mean (average) of a list of numbers in an array.

Information
To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

For an example list of 1, 3, 5, 7

1. Add all of the numbers

1+3+5+7 = 16
2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

16/4 = 4
3. The mean (or average) of this list is 4
  
</p> */

//7-15-22
var findAverage = function (nums) {
  return nums.reduce((acc,c) => acc+c, 0)/nums.length
}

//4-26-22 Solution, slightly cleaner
var findAverage = function (nums) {
 return (nums.reduce( (acc, c) => acc + c, 0)/nums.length)
}


//3/28/22 solution
var findAverage = function (nums) {
  const total = nums.reduce( (acc, c) => acc + c, 0)
  return total/nums.length
}

//Used the reduce method to sum the array, then divded that total by the array length using .length