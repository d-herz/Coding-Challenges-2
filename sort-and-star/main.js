/* <h1> Sort and Star </h1>

<h2> Codewars 8Kyu 4-21-22 </h2>

<p>
  You will be given a vector of strings. You must sort it           alphabetically (case-sensitive, and based on the ASCII values     of the chars) and then return the first value.

  The returned value must be a string, and have "***" between       each of its letters.

  You should not remove or add elements from/to the array.
  
</p> */

//7-21-22
function twoSort(s) {
  let sorty = s.sort()
  console.log(sorty)
  return sorty[0].split('').join('***')
}

//4-21-22
//But then I was able to refactor it down to this:
function twoSort(s) {
  return s.sort()[0].split('').join('***')
}

//4-21-22
//First soloution was by spelling it out like so:

function twoSort(s) {
  let sort = s.sort()[0]
  let splitty = sort.split('')
  let joint = splitty.join('***')
  return joint
}