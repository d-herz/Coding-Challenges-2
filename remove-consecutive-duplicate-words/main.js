// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries.For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

//11-21-22
const removeConsecutiveDuplicates = s => {

  let arr = s.split(' ')
  console.log(arr)

  let arr2 = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr2.push(arr[i])
    }
  }

  console.log(arr2)
  return arr2.join(' ')
}