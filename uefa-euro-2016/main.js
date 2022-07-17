/* <h1> UEFA EURO 2016 </h1>
<h2>Codewars 8Kyu 4-8-22</h2>
<h3> Redo: 4-18-22, 4-27-22

<p>
  Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

  
  
</p> */

//7-17-22 improved again
function uefaEuro2016(teams, scores){
  let winner;
  
  if(scores[0] !== scores[1]){
     winner = (scores[0] > scores [1] ? teams[0] : teams[1])+ ' won!'
  }else{
     winner = 'teams played draw.'
  }
  
  return `At match ${teams[0]} - ${teams[1]}, ${winner}` 
}

//4-27-22 improved solution
function uefaEuro2016(teams, scores){
  if(scores[0] > scores[1]){
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
  }else if(scores[0] < scores[1] ){
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
  }else{
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
  }
}


//4-8-22
function uefaEuro2016(teams, scores){
  let winner
  if (scores[0] > scores[1]){
    winner = teams[0] + " won!"
  }else if( scores[0] === scores[1]){
   
    winner = "teams played draw."
    
  }else{
    winner = teams[1] + " won!"
  }
  return `At match ${teams[0]} - ${teams[1]}, ${winner}`
}

