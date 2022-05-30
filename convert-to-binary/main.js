// Task Overview
// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */
// Example:

// toBinary(1)  /* should return 1 */
// toBinary(5)  /* should return 101 */
// toBinary(11) /* should return 1011 */


//PREP
//P: a non-negative integer
//R: a binary
//E: toBinary(5) === 101
/* 
function toBinary(n){
  return converted n from integer to binary representation
}
*/

function toBinary(n){
  return +(n >>> 0).toString(2);
}