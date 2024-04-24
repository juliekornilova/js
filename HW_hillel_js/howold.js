//Скільки тобі років? З перевіркою на число.

// let age = prompt('Скільки вам років?', 100);
let age = -2;
console.log(age);
if (isNaN(age)) { 
  console.log("Будь ласка, введіть число");
} else if (age > 0){
    // Далі код для роботи з числом
    if (age === 1) {
    console.log(`Вам ${age} рік!`); // 1 Перевіряє. Ок. 
    } else if (age >= 2 && age <= 4) {
      console.log(`Вам ${age} роки!`); //Перевіряє дужки 2 умови для 2,3,4 Ок
    } else  {
      console.log(`Вам ${age} років!`); //Перевіряє 3 умову if (4< age <=20) if (4< age <=20) 
    }
  } else {console.log("Будь ласка, введіть правильний вік")}
  
  
  
  
  //{if (age = +integer)


// if (typeof(age)) {console.log("Number is correct " + typeof age)}
// else {console.log("Please, enter the Number")};




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