// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"



//10-4-22

//PREP:
//P: string
//R: string appened and capitalized
//E; greet('riley')=== 'Hello Riley!'
/*P:
function greet(name){
toUpperCase first letter, return template literal 
}
*/

var greet = function(name) {
  
  let uniName = name.toLowerCase()
  
  let nameProp = uniName[0].toUpperCase() + uniName.slice(1)

  return `Hello ${nameProp}!`
  
};