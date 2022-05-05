//5-2-22
//Needed a little help, but once I found the .some method we got it

function cubeOdd(arr) {

  if(!arr.some(isNaN)){
  
    let filt = arr.filter(x => x % 2 !== 0)

    let mapped = filt.map( x => x**3)

    return mapped.reduce((acc,c) => acc+c,0)
  }else{
    return undefined
  }
}

