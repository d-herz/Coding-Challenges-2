// "Point reflection" or "point symmetry" is a basic concept in geometry where a given point, P, at a given position relative to a mid-point, Q has a corresponding point, P1, which is the same distance from Q but in the opposite direction.

// Task
// Given two points P and Q, output the symmetric point of point P about Q. Each argument is a two-element array of integers representing the point's X and Y coordinates. Output should be in the same format, giving the X and Y coordinates of point P1. You do not have to validate the input.

// This kata was inspired by the Hackerrank challenge Find Point


//PREP
//P: 2 numbers (coordinates)
//R: same thing
//E: symPoint ( [0,0] , [1,1]) === [2,2]
/*P
subtract difference between q and p, add inverse of difference to find symmetrical point c
*/


function symmetricPoint(p, q) {
  
  let dist = [p[0] - q[0], p[1] -q[1]]

  let c = [q[0] - dist[0], q[1] - dist[1]]
  
  return c
  
}
