/*
    6.
            1 2 3 4 5 
            1 2 3 4 
            1 2 3 
            1 2
            1

*/

let pattern = "";

for (let i = 5; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    pattern += j;
    pattern += " ";
  }
  pattern += "\n";
}

console.log(pattern);
