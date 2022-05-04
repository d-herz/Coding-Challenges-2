//5-4-22

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  return ages.sort((a,z) => a-z).slice(-2) 
}