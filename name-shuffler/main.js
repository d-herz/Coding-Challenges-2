// // 5-9-22 8Kyu

// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"


//5-9-22

function nameShuffler(str){
  return str.split(' ').reverse().join(" ")
}