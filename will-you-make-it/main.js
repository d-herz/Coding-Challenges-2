// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

//8-26-22 getting wild don't even need a ternary
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump 
};


const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  
  return distanceToPump/mpg > fuelLeft ? false : true
};

//older sol's

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  let milesCanGo = mpg*fuelLeft
  if(milesCanGo >= distanceToPump){
    return true
  } else {
    return false
  }
};

// 4-6-22 redo

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  
  let dist = mpg*fuelLeft
  
  return dist >= distanceToPump ? true : false
  
};


//4-21-22 Redo
//food for thought; if we do it in a one line arrow function, might not need 'return' (get rid of curly braces)
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return (distanceToPump <= mpg * fuelLeft) ? true : false;
};