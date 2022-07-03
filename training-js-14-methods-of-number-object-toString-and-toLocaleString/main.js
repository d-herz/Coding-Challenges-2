// Task
// Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

// Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

// the color code should starting with "#". and then use 2 characters per color.

// for example:

// colorOf(255,0,0) should return "#ff0000"
// colorOf(0,111,0) should return "#006f00"
// colorOf(1, 2 ,3) should return "#010203"
// That's all of your work. My work is print your color code on your screen.



//Prep
//P: 3 numbers
//R: a string, consisting of hexadecimal values
//E: colorOf(255,0,0) ==== "#ff0000"


function colorOf(r,g,b){
  let r2 = r.toString(16)
  if(r2.length ===1){
    r2=`0${r2}`
  }
  console.log(r2)
  
  let g2 = g.toString(16)
  if(g2.length ===1){
    g2=`0${g2}`
  }
  console.log(g2)
  
  let b2 = b.toString(16)
   if(b2.length ===1){
    b2=`0${b2}`
  }
  console.log(b2)

  return `#${r2}${g2}${b2}`
}
