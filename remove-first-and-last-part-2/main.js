/* <h1> Remove First and Last Part 2 </h1>
<h2> Codewars 8kyu 4-12-22 </h2>
<h3> Redo: 4-26-22 </h3>

<p>
This is a spin off of my first kata.

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
  
</p> */

//7-15-22
function array(arr){
  let arr1=  arr.split(',').slice(1,-1).join(' ')
  return arr1 ? arr1 : null
}



//4-26-22 solution
function array(arr){
  
  let str = arr.split(',')
  
  return str.length > 2 ? str.slice(1,-1).join(' ') : null;
}



//4-12-22 Solution
function array(arr){
  
  let arr2 = arr.split(',').slice(1,-1)
  
  return arr2 == '' ? null : arr2.join(' ')
  
  }

//older(1st?) solution of mine according to CW
function array(arr){
 
  let newArr = arr.split(',')
  
  let newArr2 = newArr.shift()
  
  let newArr3 = newArr.pop()
  
  let newArr4= newArr.join(' ')

  if (newArr4.length > 0) {
    
      return newArr4
    
    }else{
    
      return null
    }
  
  }