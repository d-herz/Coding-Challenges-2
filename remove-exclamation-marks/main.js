// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  let arr = s.split('').filter( x => x != '!').join('')
  return arr;
}