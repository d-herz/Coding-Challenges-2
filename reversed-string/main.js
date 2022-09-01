// CodeWars 8kyu Kata, 3/23/22

// Complete the solution so that it reverses the string passed into it.


//9-1-22
function solution(str){
  return str.split('').reverse().join('')
}


//8-24-22
function solution(str){
  return str.split('').reverse().join('')
  
}


//3-23-22 My baddie solution
function solution(str) {
    let splitString = str.split ('')
    //split method turns string into array
    let reverseArray = splitString.reverse()
    //reverse array method reverses new array
    let joinArray = reverseArray.join('')
    //join method joins the elements of the array into a string
    return joinArray
}