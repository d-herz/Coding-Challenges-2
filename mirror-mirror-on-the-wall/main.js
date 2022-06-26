// Too long, didn't read
// You get a list of integers, and you have to write a function mirror that returns the "mirror" (or symmetric) version of this list: i.e. the middle element is the greatest, then the next greatest on both sides, then the next greatest, and so on...

// More info
// The list will always consist of integers in range -1000..1000 and will vary in size between 0 and 10000. Your function should not mutate the input array, and this will be tested (where applicable). Notice that the returned list will always be of odd size, since there will always be a definitive middle element.

// Examples
// []  -->  []
// [1]  -->  [1]
// [2, 1]  -->  [1, 2, 1]
// [1, 3, 2]  -->  [1, 2, 3, 2, 1]
// [-8, 42, 18, 0, -16]  -->  [-16, -8, 0, 18, 42, 18, 0, -8, -16]
// [-3, 15, 8, -1, 7, -1] --> [-3, -1, -1, 7, 8, 15, 8, 7, -1, -1, -3]
// Good luck!

function mirror(data) {
  
  let arr1 = data.map( x => x)
  
  let arr2 = arr1.sort( ( a, z) => a-z)
  
  let arr3 = arr2.slice(0, arr1.length-1).reverse()
  
  return arr2.concat(arr3)
  
}
