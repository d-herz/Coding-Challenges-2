/* <h1> Grasshopper - Terminal Game Turn Function </h1>

<h2> Codewars 8kyu: 4-26-22 </h2>

<p>
  
  Terminal game turn function
You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.

You are using a library (Game.Logic in C#) that already has the functions below. Create a function named doTurn/DoTurn/do_turn that calls the functions in the proper order as described in the paragraph above.

- combat
- buyHealth
- getCoins
- printStatus
- rollDice
- move
</p> */


//7-23-22
function doTurn () {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}

//First sol 4-26-22
function doTurn () {
  // Call functions here
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}