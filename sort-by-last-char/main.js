// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

//11-2-22 (standup challenge for tonight)

//first attempt didn't work where I tried to map through and reverse every word, then sort based on the reversed words. So clever. So wrong. My final solution below (so much simpler and more elegant) came with help from Stack Overflow. 

function last(x){
  
  return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
  
}