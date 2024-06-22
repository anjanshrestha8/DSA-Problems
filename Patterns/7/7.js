/**
        7.
              *
            * * *
         * * * * * *
       * * * * * * * * 
 */

let pattern = "";

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4 - i - 1; j++) {
    pattern += " ";
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);
