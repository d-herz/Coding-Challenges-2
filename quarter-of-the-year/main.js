// 5-11-22

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.



//5-11-22
//notes: Don't need to repeat conditions, i.e. after the first one, just say month <=6, next one month <=9 ( don't need to add the previous && condition each time). See below for clever user submission I liked:


const quarterOf = (month) => {
  if ( month >= 1 && month <=3 ){
    return 1
  }else if( month > 3 && month <=6 ){
    return 2
  }else if( month > 6 && month <=9 ){
    return 3
  }else if( month > 9 && month <=12 ){
    return 4
  }
}

//user: const quarterOf = m => Math.ceil(m/3);