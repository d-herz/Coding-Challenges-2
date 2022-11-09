// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]


//11-4-22
//params: will always be 2 arrays consisting of numbers? no strings or wild stuff? will the second array have just 1 element?

//return: first array excluding any vlaues that match the value of the second array

function arrayDiff(a, b) {

  return a.filter( x => !b.includes(x))
  
}


console.log( arrayDiff( [1,2], [1] ), '[2]' )
console.log( arrayDiff( [1,2,2], [1] ), '[2,2]' )
console.log( arrayDiff( [1,2,2], [2] ), '[1]' )

//Other User Sol's

// function arrayDiff(a, b) {
//   b = new Set(b)
//   return a.filter(v => !b.has(v))
// }


// function arrayDiff(a, b) {

//   var arr = new Array(); //Not sure why you "new Array()" and not just []
  
//   for(var i = 0;i<a.length;i++){ //b.indexOf(a[i] < 0 ) because if not in b, indexOf returns -1
//       if(b.indexOf(a[i])<0){
//           arr.push(a[i]);
//       }
//   }

//   return arr;
// }

// function arrayDiff(a, b) {
//   return a.filter( v => { return b.indexOf(v) === -1 });
// }