//Home work three with types of variables
// "use strict"

// 'number' + 3 + 3 concatenate string and numbers, convert to string
// console.log('number' + 3 + 3); // returns number33

// null + 3 -null is nothing
// let answer = null + 3;
// console.log(answer); // returns 3

/* let x = 5;
let y = "qwerty";
let answer = (x == 5 && y.length == 6); 
let answer1 = (x.type !== Number && y.type == String);
console.log(answer); //returns true
// console.log(answer1); // returns false
*/
//&& the operator returns the value of the first falsy operand
// encountered when evaluating from left to right
//if all values are truthy, 
//the value of the last operand is returned
console.log(5 && "qwerty"); //returns qwerty the last truthy operand


// +'40' + +'2' + "hillel";
// +'number' converts string to number 40+2=42
// concatenates the operands 42 and string;
console.log(+'40' + +'2' + "hillel"); // returns 42hillel

/* '10' - 5 === 6;
string "10" converts into number 10, 10-5=5
=== check the result equals to operand 6
*/
console.log('10' - 5 === 6); // returns false

/* true + false
+true returns 1, +false returns 0
1+0=1
*/ 
console.log(true + false); //returns 1

// '4px' - 3
// '4px' string type, can't subtract number 3
console.log('4px' - 3); // NaN

// '4' - 3, convert string '4' to number and subtract number 3
console.log('4' - 3); // 1
// console.log(typeof '4');

// '6' + 3 ** 0;
// 3 ** 0 first math operation precedence  returns 1
// '6' string + contatenate 1
console.log('6' + 3 ** 0); //returns 61

// 12 / '6'
// "/" - It first coerces both operands to numeric values
console.log(12 / '6'); //returns 2

//'10' + (5 === 6);
// grouping has precedence
// === comparison operator check the value- it's false
//concatenate 10 to false
console.log('10' + (5 === 6)); // 10false

//null == ''
//null is nothing but "" is falsy expression empty string with value and type
console.log(null == ''); //false

//3 ** (9 / 3);
//grouping has precedence 9/3=3
//3e3=27
console.log(3 ** (9 / 3));

//!!'false' == !!'true'
console.log(!!'false' == !!'true'); //true

// 0 || '0' && 1
//'0' && 1 Operator AND has precedence, its true only if both expressions are true, returns second operand 1
// 0||1 operator OR if one is not true, 0 is false then returns true 1
console.log(0 || '0' && 1); //1 

// (+null == false) < 1;
console.log((+null == false) < 1); //false

// false && true || true
console.log(false && true || true); // true

// false && (false || true);
// grouping first is true choice
// false && true is false, because goes first in expression
console.log(false && (false || true)); //false

// (+null == false) < 1 ** 5;
//+null is 0, 
// unary plus is the fastest and preferred way of converting something into a number
// 0  == false, it's true, true ==1
// 1e5 is 1, 
//1 isn't less then 1,  it's false
// console.log(+null); //0
console.log((+null == false) < 1 ** 5); //false