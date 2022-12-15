// 12/14/22 Standup

// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

// const magazine =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// describe("Ransom Note", () => {
//   it("Should return true", () => {
//     assert.equal(ransomNote("sit ad est sint", magazine), true);
//   });

//   it("Should return false", () => {
//     assert.equal(ransomNote("sit ad est love", magazine), false);
//   });

//   it("Should return true", () => {
//     assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//   });

//   it("Should return false", () => {
//     assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//   });
// });


const magazine = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function (mag, ransomNote) {
  let magWords = mag.split(' ')
  let ransomeWords = ransomNote.split(' ')

  let magWordsMap = {}

  for (const word of magWords) {
    magWordsMap[word] = magWordsMap[word] + 1 || 1
  }

  let canItBeDone = true

  for (const word of ransomeWords) {
    if (magWordsMap[word]) {
      magWordsMap[word]--
      if (magWordsMap[word] < 0) {
        canItBeDone = false
      }
    } else {
      canItBeDone = false
    }
  }
  return canItBeDone
};


console.log(canConstruct(magazine, "sit ad est sint")) //true
console.log(canConstruct(magazine, "sit ad est love")) //false
console.log(canConstruct(magazine, "sit ad est sint in in")) //true
console.log(canConstruct(magazine, "sit ad est sint in in in in")) //false