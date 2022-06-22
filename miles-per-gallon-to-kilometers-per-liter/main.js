// Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.

// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

// Make sure to round off the result to two decimal points. If the answer ends with a 0, it should be rounded off without the 0. So instead of 5.50, we should get 5.5.

// Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres

//PREP
//P: a number
//R: a converted number
//E: converter(10)===3.54
/*P:
  function converter(mpg){
  math
  return
  }
*/


function converter (mpg) {
  
  return +(mpg * 0.354006044).toFixed(2)

}