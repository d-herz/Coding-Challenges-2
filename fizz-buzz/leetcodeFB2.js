var fizzBuzz = function(n) {
  let arr = []
    
  for (let i = 1; i <= n; i++) {
    if(i % 5 === 0 && i % 3 === 0){
      console.log(`${i} = FizzBuzz`)
      arr.push('FizzBuzz')
    }else if( i % 5 === 0){
      console.log(`${i} = Buzz`)
      arr.push('Buzz')
    }else if( i % 3 === 0){
      console.log(`${i} = Fizz`)
      arr.push('Fizz')
    }else {
      console.log(`${i}`)
      arr.push('i')
    }
  }
};

console.log(fizzBuzz(15))