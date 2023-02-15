//2-15-23



function remove(string) {
  return string.replaceAll("!", "").concat("!")
}


console.log(remove("Hi!")) // "Hi!"
console.log(remove("Hi!!!")) // "Hi!"
console.log(remove("!Hi")) // "Hi!"
console.log(remove("Hi! Hi!")) // "Hi Hi!"
console.log(remove("Hi")) // "Hi!"