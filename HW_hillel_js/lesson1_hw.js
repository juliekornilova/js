/* Task - 1
Виберіть підходящі імена для змінних та створіть їх в коді.
        1) Змінна для зберігання дати створеного файла.
        2) Змінна для зберігання ім'я файлу. 
        3) Змінна для зберігання кількості помилок. */
        var newFileDate = new Date(); //new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
        var fileName;
        var numberOfErrors;
        console.log('Type of newFileDate is ' + typeof newFileDate +'\n', newFileDate);
        console.log('Type of fileName is ' + typeof fileName +'\n', fileName);
        console.log(numberOfErrors);
        
        
        /* Task - 2
                1) Об'явіть дві змінні: login и name
                2) Змінній name в якості значення привласніть своє ім'я
                3) Скопіюйте значення із змінної name в login
                4) Виведіть в консолі  значення змінної login */
        
        var login;
        var name;
        name = "Julie";
        login = name;
        console.log(login);
        
        
        /* Task - 3
                Створіть 3 змінні в одному рядку з різними значеннями */
        
                // let x = 2, y = "qwerty", z = null;
        // console.log(x+" "+y+" "+z);
        
        
        /* Task - 4
                Створіть змінну з іменем myUndefined і встановіть її значення рівним undefined без використання слова "undefined" 
                %%% https://www.tiktok.com/@devslopes/video/7150509431485107498 %%%
                */
        let myUndefined;
        console.log(typeof myUndefined, myUndefined);
        
        
        /* Task - 5
                Вам потрібно записати рядок "I'm lovin' it!" у змінну resultLine.
        
                - Значення змінних line1, line2, line3 не змінювати.
        */
        
              let line1 = "Lovin";
                let line2 = "It!";
                let line3 = "I'm";
        
                let resultLine = line3+" "+line1+" "+line2; //change this line
        
                console.log(resultLine);
        
        /* Task - 6
                Вам потрібно записати рядок "70" у змінну digits.
                Використовуйте змінні x, y, z, порожній рядок та конкатенацію рядків.
        
                - Значення змінних x, y, z не змінюйте.
        */
        
        //     let x = 3;
        //     let y = 4;
        //     let z = 0;
        
        //     let digits =  x + y + "" + z; //change this line
        
        //     console.log(digits);
        
        /* Task - 7
                Вам потрібно записати число 100500 у змінну hugeAmount.
                Використовуйте змінні bigAmount, greatAmount та перетворення рядка у число.
                Оголосити та ініціалізувати hugeAmount однією командою.
        
                - Не змінюйте значення змінних bigAmount і greatAmount.
                - Використовуйте bigAmount, greatAmount та метод Integer() для ініціалізації змінної hugeAmount.
        */
        
        
                let bigAmount = "500";
                let greatAmount = "100000";
        
                let hugeAmount = Number(greatAmount) + Number(bigAmount); //change this line
        
                console.log(hugeAmount);
        
        
        /* Task - 8
                Змінити код так, щоб замість значень рядків виводилась довжина кожного рядка.
        
        
                - Не змінюйте значення змінної emptyString.
                - Для трьох рядків, переданих у метод console.log, слід викликати метод length.
                - Програма повинна вивести три числа, кожне з нового рядка.
        */
        
                let emptyString = "";
        
                console.log("\n"+"Length of rows are:" + "\n",  emptyString.length);
                console.log(String("Think Different").length);
                console.log((emptyString + 2 + 2 + "22").length);
        
        
        /* Task - 9
                На екран виводиться 4 рядки. Усі вони є яскравим прикладом зловживання великими літерами.
                Внесіть зміни у код, щоб усі літери у цих рядках були маленькими.
        
        
                - Змінні title, degree та career не змінюйте.
                - Для чотирьох рядків, переданих у метод console.log, слід викликати метод toLowerCase.
        */
        
              let title = "Senior Lead Principal Data Analyst";
                let degree = "In college, I Majored in Economics Science and Minored in Musician Studies.";
                let career = "Data Scientist With 3+ Years of Experience in Big Data Analytics.";
        
                console.log("RESUME".toLowerCase());
                console.log(("TITLE: " + title).toLowerCase());
                console.log(("DEGREE: " + degree).toLowerCase());
                console.log(("CAREER: " + career).toLowerCase());
        
        
        /* Task - 10
                На екран виводиться 3 рядки. Усі вони є яскравим прикладом зловживання великими літерами.
                Внесіть зміни у код, щоб усі літери у цих рядках були великими.
        
                - Значення змінних caps та usa не змінюйте.
                - Викличте метод toUpperCase для трьох рядків, переданих методу console.log.
        */
        
        //     let caps = "if I type in caps ";
        //     let fbi = "фбр";
        
        //     console.log(fbi.toUpperCase());
        //     console.log("Гекльберрі Фінн".toUpperCase());
        //     console.log((caps + "they know I mean business").toUpperCase());
        
        
        /* Task - 11
                Додайте операції множення, ділення та віднімання.
                Відображати результати двома способами: за допомогою конкатенації та за допомогою шаблонних рядків.
        */
        
            let inputX = 2;
                let inputY = 3;
        
                let x1 = Number(inputX);
                let y1 = Number(inputY);
        
                let result = x1 + y1;
                let result1 = inputX + inputY;
        
                console.log(`${x1} + ${y1} = ${result}`);
                console.log(x1+ "" +y1);
                console.log(result);
        
        /* Task - 12
                Ініціалізуйте змінну message - значення повинно бути створене за домпомогою шаблонного рядка та за допомогою конкотинації
                Рядкове значення має бути створене на основі значення змінних name, age, company, position, наприклад:
                Привіт, мене звати Максим. Мені 29 років. Я працюю на посаді QA в компанії Apple.
        */
        
            let nameNew = "Максим";
                let age = 29;
                let company = "Apple";
                let position = "QA";
        // Тут не розумію, чого не працює інтерполяція? ${}
                let message1 = "Привіт, мене звати ${nameNew}. Я працюю на посаді ${position} в компанії ${company}.";
                let message2 = "Привіт, мене звати " + nameNew +". Я працюю на посаді " + position + " в компанії " + company;
                console.log(message1);
                console.log(message2);
        
        // let name23 = "Анна";
        // let greetings = `Привіт, ${name23}!`;
        // console.log(greetings);