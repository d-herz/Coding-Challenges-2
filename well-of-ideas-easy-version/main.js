/* <h1> Well of Ideas - Easy Version </h1>
<h2> Codewars 8kyu, 5-2-22 </h2>


<p>
  For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
  
</p> */

//7-26-22
//Much different solution
function well(x){
  let tot = 0
  for(let i = 0; i<=x.length; i++){
    if(x[i] === 'good'){
      tot +=1
    }
  }
  return tot === 0 ? 'Fail!' : tot > 2 ? 'I smell a series!' : "Publish!" 

}

//Sol 5-2-22

function well(x){
  //if 1 OR 2 good ideas: return 'Publish!'
  //If MORE than 2: return 'I smell a series!'
  //If no good ideas: return 'Fail!'
  
  let filt = x.filter( el => el === 'good')
  
  if(filt.length === 1 || filt.length ===2){
    return "Publish!"
  }else if(filt.length>2){
    return "I smell a series!"
  }else{
    return 'Fail!'
  }
}