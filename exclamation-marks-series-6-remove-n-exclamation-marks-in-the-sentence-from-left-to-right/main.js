// Description:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"


//prep
//p: string, and a number
//r: string, with -n '!'
//e: remove("hi!!!",2)=== "hi!"
//p: 
/*  
// function remove(s,n){
// loop through s, n times, each time removing a ! from left to right
// }
// */


function remove(s,n){
  while(n){
    s = s.replace('!','' )
    n--
  }
  return s
}

