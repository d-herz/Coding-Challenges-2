// 5-10-22 8Kyu

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

//5-10-22

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}
