// 5-13-22

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

//5-13-22

//P: s speed
//R: s in cm
//E: cockroachSpeed(1.08) === 30
//p: function cockroadSpeed(s){
  
// }

function cockroachSpeed(s) {
  return Math.floor(s*(100000/3600))
}