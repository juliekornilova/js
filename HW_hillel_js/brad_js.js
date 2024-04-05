// function drawTriangle();

// function drawTriangle(size) {
//     var s = size;
//     var result = "";
//     for (var x = 0; x < 4; x++) {
//     for (var y = 0; y <= 15; y++) {
//     line += "*";
//     }
//     if (x !== s - 1)
//     result += " ";
//     }
//     console.log(result);
//     }

//     function setup() { 
//         createCanvas(400, 400); 
//     } 
      
    function draw() { 
        background(220); 
        fill('lightgreen'); 
      
        // A triangle at (100, 250), (250, 170) and (330, 300)   
        triangle(100, 250, 250, 170, 330, 300);  
    } 
    let nameNew = "Максим";
    let age = 29;
    let company = "Apple";
    let position = "QA";
    let message1 = "Привіт, мене звати ${nameNew}. Я працюю на посаді ${position} в компанії ${company}.";
    let message2 = "Привіт, мене звати " + nameNew +". Я працюю на посаді " + position + " в компанії " + company;
    console.log(message1);
    console.log(message2);