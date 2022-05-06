//5-6-22 DNF
//One of the test strings is '610138861438647157', and if I return that to a number (with out the tenary, just to see what happens, it gets rounded up for some odd reason..)



function divisibleByThree(str){

  return Number(str) % 3 === 0 ? true : false
  
}