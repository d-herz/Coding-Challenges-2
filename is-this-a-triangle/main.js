// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c){
  
  if( a+b > c && a+c > b && b+c > a){
    return true
  }else{ 
    return false;   
  }
}



//All you have to do is use the Triangle Inequality Theorem, 
//which states that the sum of two side lengths of a triangle is always 
//greater than the third side. If this is true for all three combinations of 
//added side lengths, then you will have a triangle.
