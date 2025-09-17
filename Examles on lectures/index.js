// var enterUserName = prompt('Enter your name');
// // Вызов данных через HTML страницу
// document.writeln(enterUserName);


// // Вывод данных в консоль
// console.log(enterUserName);

// // вывод данных через alert всплывающее окно
// alert(enterUserName);



//1) String - всё что в кавычках - строка
var customerName = 'Alim';
var customerLastName = 'Shirakhunov';


console.log("Привет меня зовут " + customerName + ' ' + customerLastName);


//2) Number - числа без кавычек - целые и дробные
var numberCost = 12345;
var numberCost2 = 123.45;


//3) Boolean - логический тип данных (true/false)
var Univer = true;


//4) Undefined - неопределённый тип данных
var customerBirthDate; // переменная создана, но не определена

//5) Null - тип данных, который имеет значение null (пусто)
var customerBirthDate2 = null;

//6) Object - объектный тип данных
var customerPassport = {
    Series: 'AB',
    Number: '123456',
    IssueDate: '01.01.2020',
    IssuedBy: 'Passport Office',
    Address: 'Tokmok'
};

console.log(customerPassport.Number);



// var userName= 'Alim';



// document.body.style.backgroundColor = '#333';
// alert('put on button!');


















// Массивы (индексация, длинна, добавление)
// Цикл for / for of, for со счетчиком
// оператор  ++
// управляющие операторы циклов breake continue
// разница между == ===
// принцип DRY

// принцип DRY
// корявый код
function square1(a) {
    return a * a;
}
function square2(b) {
    return b * b;
}

// True
function square(a,b) {
    return a * b;
}



// разница между == - сравнение значений .    === -сравнение значений + тип данных
console.log('hello'== "hello"); 
console.log('1'== 1);
console.log(1 === '1');
console.log(1 === 1);




// управляющие операторы циклов breake continue

for (var i = 1; i<=10; i++){
    if(i===3) continue; // на 3м шаге продолжаем цикл но пропустили для отобр
    if(i===10) break; // на 10м шаге останавливаем цикл
    console.log(i);
    
}





//оператор ++
// var num = 5;
// console.log(num++);
// console.log(num);

// var num2 = 2;
// console.log(++num2);





//for of, for со счетчиком
var numbers = [10, 20, 30];
//for of
for(var i of numbers){
    console.log('Элементы: ', i);
}
//for со счетчиком
for (var i=0; i<numbers.length; i++){
    console.log('Индекс ' + i + ' значение ' + numbers[i]);
}

// Массивы
var fruits = ['apple', 'banana', 'cherry'];
//индексация
console.log(fruits[0]);
console.log(fruits[2]);
//длинна
console.log(fruits.length + ' Это кол-во элементов в массиве');
//добавление в конец
fruits.push('orange');

//добавление в начало
fruits.unshift('mango');

//изменить
fruits[2] = 'strawberry';

console.log(fruits);









//Циклы (повторение)
//бесконечный цикл и его последствия
//Цикл while и do while
//Задача на переворот строки(самостоятельная работа)
//Игра угадай число
//Функции 2 способа написания declaration experession ключевое return
//Тернарный оператор


// //Тернарный оператор
// var age = Number(prompt('сколько вам лет?'))
// var status = (age>=18) ? "Взрослый":"Несовершеннолетний"
// alert(status)




// //experession
// var square2 = function(b,c){
//     return b*c;
// }
// console.log(square2(132,44));




// //declaration
// function square(a, b){
//     return a*b;
// }
// console.log(square(13, 44));






//Игра угадай число 10мин на размышление(чат gpt запрещен!!!)
// var secret = Math.floor(Math.random()*100)+1;
// var guess;
// var attemps = 0;

// do{
//     guess = Number(prompt('Комп загадал число от 1 до 100 угадай?'));
//     attemps++;
//     if(guess<secret){
//         alert('слишком маленькое');
//     }else if(guess>secret){
//         alert('слишком большое');
//     }else{
//         alert('Угадал! молодчик');
//     }
// }while(guess!== secret);






//password
// do{
//     password = prompt('Enter your password');
// }while(password !=='1234')
//     alert('Доступ разрешен');




// var i = 0;
// while(i<5){
//     console.log('i= '+i);
//     i++;
// }


//error
// var i = 0;
// while(i<5){
//     console.log("i= "+i);
    
// }





//Циклы (повторение)
for(var i = 1; i<=10; i++){
    console.log('Число -- ', i);
}

for(var i=1; i<=10; i++){
    if(i%2===0){
        console.log(i+' четное');
    }
    else{
        console.log(i+' нечетное');
    }
}