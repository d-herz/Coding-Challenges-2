// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

//10-13-22 (this was our huntober standup today also)

//P: always a string? will it always end with .com (no .net, .io, etc?)
//R: string
//E: domainName("http://github.com/carbonfive/raygun") == "github"
/*
P: function domainName(url){

}
*/


function domainName(url){
  console.log(url)
  let url2
   
  if(url.includes('http://') && url.includes('www.')){
    url2 = url.replace('http://','').replace('www.','').split('.')[0]

  }else if(url.includes('http://')){
    url2 = url.replace('http://','').split('.')[0]

  }else if(url.includes('https://') && url.includes('www.')){
    url2 = url.replace('https://','').replace('www.','').split('.')[0]

  }else if(url.includes('https://')){
    url2 = url.replace('https://','').replace('www.','').split('.')[0]

  }else if(url.includes('www.')){
    url2 = url.replace('www.','').split('.')[0]

  }else{
    url2=url.split('.')[0]
  }
  
 console.log(url2)
 return url2
  
}