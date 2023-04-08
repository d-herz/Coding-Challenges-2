// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// P: string
// R: String but different
// P: 

function toCamelCase(str){
  let ans = ""
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-" || str[i] === "_") {
      ans += str[i + 1].toUpperCase()
      i++
    } else {
      ans+= str[i]
    }
  }
  // console.log(ans)
  return ans
}

console.log(toCamelCase("the-stealth-warrior")) // "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")) // "TheStealthWarrior"
console.log(toCamelCase("The_Stealth-Warrior")) // "TheStealthWarrior"