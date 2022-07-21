/* <h1> Add Length </h1>

<h2> Codewars 8Kyu 4-20-22 </h2>

<p> Got it bitch! </p>

<p>
  What if we need the length of the words separated by a space to   be added at the end of that same word and have it returned as     an array?

  addLength('apple ban') => ["apple 5", "ban 3"]
  addLength('you will win') => ["you 3", "will 4", "win 3"]
  Your task is to write a function that takes a String and          returns an Array/list with the length of each word added to     each element .

  Note: String will have at least one element; words will always    be separated by a space.
  
</p> */

//7-21-22: I did the answer I couldn't last time!
function addLength(str) {
  return str.split(' ').map( x => x + ` ${x.length}`)   
}


//4-20-22 so amped! Took a while but got it
//seeing others solutions shows me how much i overthought. Could do whole thing in 1 line with split & map
//i.e.;  return str.split(' ').map(function(v){return v+' '+v.length

function addLength(str) {
  let arr = str.split(' ') //split string into an array seperated at spaces
  console.log(arr)  
  let len = arr.map( x => x.length ) //retrun a new array consisting of the lengths of the elements in the split array
  console.log(len)
 
  //Loop through each element of 'arr' and append the length
  for (let i = 0; i< arr.length; i++){
      arr[i] = arr[i] +' '+ len[i]
    }
  return arr
}