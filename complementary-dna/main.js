// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


//10-5-22

//PREP:
//P: dna string
//R: a string
//E: DNAStrand('ATTGC')=== 'TAACG'
/*P: function DNAStrand(dna){

switch case or conditional in a loop

}
*/

function DNAStrand(dna){
  
  let dnaArr = dna.split('')
  console.log(dnaArr)
  
  let dnaComp = []
  
  for(let i =0; i<dnaArr.length; i++){
    switch (dnaArr[i]){
        case 'A':
          dnaComp.push('T');
          break
        case 'T':
          dnaComp.push('A');
          break;
        case 'C':
          dnaComp.push('G');
          break;
        case 'G':
          dnaComp.push('C');
          break;
    }  
  }
  return dnaComp.join('')
  
}