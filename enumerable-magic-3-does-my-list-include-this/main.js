// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

//PREP
//P: array and a value
//R: boolean
//E: include([1,2,3,4], 3)===true
/* 
function include(arr,item){

return a boolean based on if array includes 'item'

}

*/

function include(arr, item){
  return arr.includes(item)
}