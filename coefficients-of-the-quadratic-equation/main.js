// In this Kata you are expected to find the coefficients of quadratic equation of the given two roots (x1 and x2).

// Equation will be the form of ax^2 + bx + c = 0

// Return type is a Vector (tuple in Rust, Array in Ruby) containing coefficients of the equations in the order (a, b, c).

// Since there are infinitely many solutions to this problem, we fix a = 1.

// Remember, the roots can be written like (x-x1) * (x-x2) = 0

// Example
// quadratic(1,2) = (1, -3, 2)
// This means (x-1) * (x-2) = 0; when we do the multiplication this becomes x^2 - 3x + 2 = 0

// Example 2
// quadratic(0,1) = (1, -1, 0)
// This means (x-0) * (x-1) = 0; when we do the multiplication this becomes x^2 - x + 0 = 0

// Notes
// Inputs will be integers.
// When x1 == x2, this means the root has the multiplicity of two

//PREP
//P: 2 integers
//R: an array of 3 integers
//E: quadratic (4,-9) === [1,5,-36]

/*P:
  insert given integers into (x-x1)(x-x2) and retreive a,b,c
*/



function quadratic(x1, x2){
  //   let a = 1 
  //   let b = -(x1+x2)
  //   let c = (x1*x2)
  //   return [a,b,c]
    return [1, -(x1+x2), (x1*x2)]
  
  }