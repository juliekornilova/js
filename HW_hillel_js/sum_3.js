// Сума чисел від 1 до 100, які не діляться на 3
function sumTo(n) { 
let sum = 0;
for ( let i = 1 ; i <= n ; i ++ ) { 
    if (i%3){
    sum += i ;
    // console.log("число не ділиться на 3 " + i);
        };
    }; 
return sum 
}
sumTo(100);
console.log("Сума чисел від 1 до 100, які не діляться на 3 = " + sumTo(100));

// console.log(sumTo(100))
// console.log(typeof sumTo(), sumTo());


// for (let x = 1; x<=100; x++) {
//         if (x%3) {
//             console.log("Число, яке не ділиться на 3 = " + x);
//         };
//         console.log("----" + x)
//     }
//     console.log("----" + x);

// Loop for calculating sum of numbers that don't devided by 3 - x%3
// let sum = 0;
// let n = 100;
//         for ( let i = 1 ; i <= n ; i ++ ) { 
//             if (i%3){
//                 sum += i ;
//                 console.log("число не ділиться на 3 " + i);
               
//             };
            
          
        // }; 
        // console.log("Sum = " + sum);

    
    