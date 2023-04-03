
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let wealth = 0;
  let total = 0;

  for (let i = 0; i < accounts.length; i++) {
    total = accounts[i].reduce((acc, c) => acc + c);

    if (total > wealth) {
      wealth = total;
    }
  }
  return wealth
};

console.log(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]])) // 17
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]])) // 10