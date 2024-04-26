// Power by
const powerOf = (_base, power)  => {
    let baseOf = _base;
  if (power > 0){
    for (let i = 1; i < power; i++) { //need to keep looping until power
        baseOf *= _base;
      console.log("Inside loop " + i + " " + baseOf);
    }

    return baseOf;
} else {console.log("Check the power is positive integer")};
    
  }
console.log("Outside = " + powerOf((-2), -3)); // Чому не спрацьовує для від'ємного ступеню?
console.log("Outside = " + powerOf(2, 3));




// function toPower(x, n){
//     let result = x;
//     for (i = 0; i < n; i++) {
//     result *= x;
//     }
//     return result;
// }
// toPower();
// console.log(toPower(2, 3));