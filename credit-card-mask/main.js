// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

//PREP
//P:string of letters or numbers
//R: same string or number, but with only last 4 digits not '#'
//E: maskify(123456789)==== #####6789
/*P:function maskify(cc){

maybe split, reverse, loop (if i<=4, i, else #), then re-reverse and join? Numbers might be issue
}
*/


function maskify(cc) {

  let arr = cc.split('')
  
  let arrRev = arr.reverse()
 
  let newArr = []
  
  for(let i = 0; i<arrRev.length; i++){
    if(i<4){
      newArr.push(arrRev[i])
    }else{
      newArr.push('#')
    }
  }
  return newArr.reverse().join('')
}


