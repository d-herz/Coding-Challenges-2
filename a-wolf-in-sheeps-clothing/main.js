/* <h1> A Wolf in Sheep's Clothing </h1>

<h2> Codewars 8Kyu, 4-22-22 </h2>

<p>
  
  Wolves have been reintroduced to Great Britain. You are a sheep   farmer, and are now plagued by wolves which pretend to be         sheep. Fortunately, you are good at spotting them.

  Warn the sheep in front of the wolf that it is about to be        eaten. Remember that you are standing at the front of the       queue which is at the end of the array:

  [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]           (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
  If the wolf is the closest animal to you, return "Pls go away     and stop eating my sheep". Otherwise, return "Oi! Sheep number    N! You are about to be eaten by a wolf!" where N is the         sheep's position in the queue.

  Note: there will always be exactly one wolf in the array.

  Examples
  Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
  Output: "Oi! Sheep number 1! You are about to be eaten by a       wolf!"

  Input: ["sheep", "sheep", "wolf"]
  Output: "Pls go away and stop eating my sheep"

</p< */


//7-21-22 Slightly different this time, original ternary might have been better haha
function warnTheSheep(queue) {

  let revQ = queue.reverse()
  let wolfInd = revQ.indexOf('wolf')
  
  if(wolfInd === 0 ){
    return `Pls go away and stop eating my sheep`
  }else{
    return `Oi! Sheep number ${wolfInd}! You are about to be eaten by a wolf!`
  }
}

//4-22-22 Solution
//Could have used .indexOf()
function warnTheSheep(queue) {
  let rev = queue.reverse()
  let wolfInd = rev.findIndex(x => x ==='wolf')
  
  return wolfInd === 0 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${wolfInd}! You are about to be eaten by a wolf!`; 
}