// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

//PREP
//P: is a number, the arc length
//R: a number rounded to 2 sig. figs.
//E: squareArea(2)=== 1.62
/*
P:
    function squareArea(A){
    math.toFixed(2)
    }
*/

//Arc Length = 90 × (π/180) × r

// r = ArcL/(90 * pi/180)

function squareArea(A){
  
  let rad = A/(90 * (Math.PI/180))
  
  return +(rad*rad).toFixed(2)
}
