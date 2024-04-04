// let year;
// function prompt()
// console.log(year);

// console.log(-6 % 3); //-0 -!!!
// console.log(undefined ?? null ?? false);

let person = prompt("Please enter your name:", "Harry Potter");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! How are you today?";
  }
  console.log(text);