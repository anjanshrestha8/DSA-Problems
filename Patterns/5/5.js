/*
    5.

    *****
    ****
    ***
    **
    *


*/

let pattern = "";

for (let i = 0; i < 5; i++) {
  for (let j = 5; j > i; j--) {
    pattern += "*";
    pattern += " ";
  }
  pattern += "\n";
}

console.log(pattern);
