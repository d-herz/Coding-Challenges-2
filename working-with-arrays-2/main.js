//5-6-22
//Tricky, had to use filter instead of splice

function removeNthElement(arr, n) {
 
  let arr2 = arr.filter( (x,i) => i !== n)
  
  return arr2;
}