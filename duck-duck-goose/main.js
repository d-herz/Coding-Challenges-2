/* <h1> Duck Duck Goose </h1>

<h2> Codewars 8Kyu 4-26-22 </h2>

<p>
  The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

Example:

duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name
</p> */

//7-24-22
function duckDuckGoose(players, goose) {
  console.log(players)
  console.log(goose)
  if(goose <= players.length){
    let num = goose -1
    return players[num].name
    
  }else if(goose % players.length === 0){
    let num = (goose % players.length) + players.length -1
    return players[num].name
  
  }else{
    let num = goose % players.length -1
    return players[num].name
  }
}


//Solution 4-26-22
// Took a while!
//One line solution from user solutions; return players[(goose-1)%players.length].name
function duckDuckGoose(players, goose) {
  let i;
  if (goose <= players.length){
    i = goose;
   
  }else if(goose % players.length === 0){
    i = players.length
    
  }else{
    i = goose % players.length   
  }
  
  return players[i-1].name
 
}