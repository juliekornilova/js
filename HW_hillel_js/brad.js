// First variant with for (let i=0; i < 5; i++) {}

let str = '';
console.log("First variant");

for (let i = 0; i < 5; i++) {
  str = str + "*";
  console.log(str);
}


// Second variant do...while

let result = '';
let i = 0;
console.log("Second variant");

do {
  i++;
  result = result + "*";
  console.log(result);
} while (i < 5);



// Variant with console.log

    // let asteriks = "*";
    // console.log(asteriks);
    // console.log(asteriks + asteriks);
    // console.log(asteriks + asteriks+asteriks);
    // console.log(asteriks + asteriks+asteriks+asteriks);
    // console.log(asteriks + asteriks+asteriks+asteriks+asteriks);
    
// console.log("merry Cristmas")
