/*
    4.

    1
    22
    333
    4444
    55555



*/

let pattern = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    pattern += i;
    pattern += " ";
  }
  pattern += " \n";
}
console.log(pattern);
