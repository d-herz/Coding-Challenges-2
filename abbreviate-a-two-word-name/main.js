// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


//8-28-22 similar but different
function abbrevName(name){
  let fName = name.split(' ').shift().toUpperCase()
  let lName = name.split(' ').pop().toUpperCase()

  return `${fName[0]}.${lName[0]}`
}


//7-13-22 different this time
function abbrevName(name){
  let arr = name.split(' ')
  let fName = arr[0].toUpperCase()
  let lName = arr[1].toUpperCase()
  
  return `${fName[0]}.${lName[0]}`
}

//4-19-22 Sol, got this on own with no googling or cheating (very similar to prev solution)
function abbrevName(name){

    let arr = name
                  .split(' ')
                  .map( x => x.charAt(0))
                  .join('.')
                  .toUpperCase();
  return arr
}


//3-26-22 Solution
function abbrevName(name){
  
  return name
    .split(' ') //split to change into array
    .map(word => word[0]) //map to iterate over and return first letter of each word
    .join('.') //join the array of 1st letters back into a string, and add dot
    .toUpperCase() //uppercase that shit
}
