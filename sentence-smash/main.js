// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'


//7-10-22
function smash (words) {
  return words.join(' ')
};


//4/11/22
function smash (words) {
  let arr = words.join(' ')
   return arr
};

//my solution 3/31/22, didn't need trim I guess?
function smash (words) {
   return words.join(' ').trim()
  
};