//Скільки тобі років? З перевіркою на число.

// let age = prompt('Скільки вам років?', 100);
let age ="a";
console.log(age);
if (typeof(age)) {console.log("Number is correct " + typeof age)}
else {console.log("Please, enter the Number")};
if (age == 1) console.log(`Вам ${age} рік!`); // Чому він не перевіряє умову не розумію?
if (2<= age <=4) console.log(`Вам ${age} роки!`);
if (4< age <=20) console.log(`Вам ${age} років!`);



// var prompt = require('prompt');

  //
  // Start the prompt
  //
  // prompt.start();

  //
  // Get two properties from the user: username and email
  // console.log('How old are you?');
  // prompt.get(['username', 'email'], function (err, result) {
  //   //
  //   // Log the results.
  //   //
  //   console.log('Command-line input received:');
  //   console.log('  username: ' + result.username);
  //   console.log('  email: ' + result.email);
  // });
    // console.log('You are:');
    // for (let year = 1 ; ;) console.log(result.year + " рік");
    // for (year == 2, 3, 4;; console.log(result.year + " роки"); 
    // if (result.year = 1) console.log(result.year + " рік");
    // if (result = 2, 3, 4) console.log(result.year + " роки");
    // if (result > 4) console.log(result.year + ' років ');
    // console.log(result.year + ' років ');
    // console.log('  email: ' + result.email);
  
//   let result.year = 
// switch (result.year) {
//     case 1:
//         console.log(result.year + " рік")
//         break;
//     case 2:
//         console.log(result.year + "роки"); 
//         break;

//     default:
//         console.log('Що ???');
// };
// });