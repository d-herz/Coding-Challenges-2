// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

//PREP
//P: a string, single word or multiple with varying capitalization
//R: a string
//E: getDrink('Jabroni') -> "Patron Tequila"
//P: fn get Drink(input) {
// if(this input){ return this output}
//else if( this input){ return this other output}
//}

function getDrinkByProfession(param){
  let lc = param.toLowerCase()
  
  if(lc === 'jabroni'){
    return 'Patron Tequila'
  }else if(lc === 'school counselor'){
    return "Anything with Alcohol"
  }else if(lc === 'programmer'){
    return 'Hipster Craft Beer'
  }else if(lc === 'bike gang member'){
    return 'Moonshine'
  }else if(lc === 'politician'){
    return 'Your tax dollars'
  }else if(lc === 'rapper'){
    return 'Cristal'
  }else{
    return "Beer"
  } 
}

//could have used a switch case