//Create a function that takes in a DNA sequence and retruns the complentary DNA strand.
//Ex: CCGGTTAA would return GGCCAATT

//using regular expressions
function DNAStrand(dna){
	var comp = {
    C: 'G',
    G: 'C',
    A: 'T',
    T: 'A'
  };

  return dna.replace(/./g, function(e){ return comp[e];});
}

//using map
function DNAStrand(dna){
	var comp = {
    C: 'G',
    G: 'C',
    A: 'T',
    T: 'A'
  };

  return dna.split('').map(function(e){ return comp[e];}).join('');
}

//using a for loop
function DNAStrand(dna){
  var newComp = "";
  var comp = {
    C: 'G',
    G: 'C',
    A: 'T',
    T: 'A'
  };
  for(var i=0; i < dna.length; i++){
     newComp = newComp + comp[dna[i]].toUpperCase();
  };
  return newComp;
}