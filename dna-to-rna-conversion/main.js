// 5-10-22

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.


//5-10-22 DNF DNF DNF

function DNAtoRNA(dna) {
  let str = dna.replace('T', 'U');
  
  let str1 = str.replace('T', 'U');
  
  let str2 = str1.replace('T', 'U');
  
  let str3 = str2.replaceAll('T', 'U');
  
  
  return str3
}