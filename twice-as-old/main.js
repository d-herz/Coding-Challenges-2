// 5-13-22

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

//P: Fathers age, sons age
//R: How many years since or until fathers age = 2*sons age
//E: twiceAsOld(45, 20) === 5, twiceAsOld(73, 38) === 3
//P: twiceAsOld(d,s){ 
//        return (d-s) === 0 ? 0 : (d-s)-s

function twiceAsOld(d, s) {
  return d-s === 0 ? 0 : Math.abs((d-s)-s);
}