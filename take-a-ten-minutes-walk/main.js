// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


//PREP
//P: an array of letters
//R: boolean: true or false
//E: isValidWalk(['n','s','n','s','n','s','n','s','n','s']) === true
/*
P:  isValidWalk(walk){  
  check array length === 10? (more or less than 10 return false)
  check that directions return you back to starting position
}
*/

function isValidWalk(walk) {
  if(walk.length === 10){
    let north = walk.filter( x => x === 'n')
    let south = walk.filter( x => x === 's')
    let east = walk.filter( x => x === 'e')
    let west = walk.filter( x => x === 'w')
    
    if(north.length === south.length && east.length === west.length){
      console.log(north)
      console.log(south)
      return true  
    }else{
      return false
    }
  }else{
    return false
  }
}

//efficient user sol similar to mine but better
function isValidWalk(walk) {
  const north = walk.filter(item => { return item === "n" }).length;
  const south = walk.filter(item => { return item === "s" }).length;
  const east = walk.filter(item => { return item === "e" }).length;
  const west = walk.filter(item => { return item === "w" }).length;
  
  return walk.length === 10 && north === south && east === west;
}