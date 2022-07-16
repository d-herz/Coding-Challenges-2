/* <h1> Count the Monkeys!</h1>

<h2>Codewars Kata 8kyu 4-4-22</h2>
<h3> Redo: 4-13-22, 4-29-22 </h3>

<p>
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example:

monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
monkeyCount(1) // --> [1]
  
</p> */

//7-15-22 Same exact result
//4-29-22 Same result again
//4-13-22 redid with same result
//4-4-22
function monkeyCount(n) {
  let arr = [];
  for (let i =1; i<= n; i++){
    arr.push(i)
  }
  return arr
}






