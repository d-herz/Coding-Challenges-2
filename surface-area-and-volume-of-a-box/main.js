// 5-21-22

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]


//PREP
//P: numbers, width height and depth
//R: numberd in an arry
//E: getSize(4,2,6) === [88,48]
/* 
getSize() {
math
}
*/

function getSize(w, h, d){
  let area = 2*(w*h) + 2*(w*d) + 2*(h*d)
  let vol = w*h*d
  
  return [area, vol]
  
}
