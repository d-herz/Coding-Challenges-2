// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.



//8-25-22 
function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`
}

//7-10-22 redo
function areYouPlayingBanjo(name) {
  let lc = name[0].toLowerCase()
  
  if(lc.includes('r')){
    return `${name} plays banjo`
  }else{
    return `${name} does not play banjo`
  }
}

//4-22-22 Improved previous sols!
function areYouPlayingBanjo(name) {
  return ( name.charAt(0).toLowerCase()=== 'r') ? `${name} plays banjo`: `${name} does not play banjo`;
 
}


// my redo 4-10-22

function areYouPlayingBanjo(name) {
 
  return (name.charAt(0) === 'R' || name.charAt(0) === 'r') ? `${name} plays banjo` : `${name} does not play banjo`;
  
}

//My solution from 3/26/22

function areYouPlayingBanjo(name) {
  
  if (name.charAt(0) === 'R' || name.charAt(0)=== 'r'){
    return `${name} plays banjo`
  }else{
    return `${name} does not play banjo`
  }
  
  return name;
}


//alt solution from another user

function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}