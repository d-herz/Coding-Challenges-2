/* <h1> String Repeat </h1>

<h2>Codewars 8Kyu Kata, 3/24/22</h2>

<p>Write a function called repeatStr which repeats the given string string exactly n times.

redid: 4-3-22 and pushed to GH
redid: 4-5-22, 4-20-22,

</p> */


//8-24-22
function repeatStr (n, s) {
  return s.repeat(n);
}

//7-12-22 Solution
function repeatStr (n, s) {
  let str = ''
  for(let i =0; i<n; i++){
    str += s
  }
  return str
}

//Alt solution: very similar;
function repeatStr (n, s) {
  let str = ''
  for(let i = 1; i<=n; i++){
    str += s
  }
  return str
}

//First sol
function repeatStr (n, s) {
  let str="";
  for (i=0; i< n; i++){
    str += s
  }
  return str;
}

