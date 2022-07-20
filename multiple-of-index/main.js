/* <h1> Multiple of Index </h1>

<h2> Codewars 8Kyu 4-15-22 </h2>

<p>
  Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
  
</p> */

//7-20-22
function multipleOfIndex(array) {
  
  return array.filter( (x,i) => x % i === 0)
}

//4-15-22
function multipleOfIndex(array) {
    return array.filter( (x,i) => x % i === 0)

    
}