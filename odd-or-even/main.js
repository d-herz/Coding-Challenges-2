//ft 5-4-22

function oddOrEven(array) {
  let sum = array.reduce( (acc, c) => acc+c, 0)
  
  return sum % 2 === 0 ? 'even' : 'odd';
    
}