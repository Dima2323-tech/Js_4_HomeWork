//1)Створити обєкт userWallet  в якому існують ключі (amountUsa, amountEuro, amountUa) які містять числові значення ( збереження юзера)
// Створити массив обєктів bank в якому є обєкет в якому є ключі buy, sell  з числовими значеннями ( продаж і покупка валюти) а також ключ name в який передаємо назву валюти (usa, euro, ua)
// Створити функцію яка опрацьовує ці данні і повертає скільки долларів чи євро може купити користувач, врахувати можливість неможливості покупки.
// Створити функцію яка прораховує скільки гривень отримує користувач продавши свої збереження
console.log("---------------------Первое задание----------------------")
const userWallet = {
    amountUsa: 5000 ,
    amountEuro: 1000 ,
    amountUa: 30000,
}
let bank = [
    {
        buy: 40,
        sell:41,
        name: "usa"
    },
    {
        buy: 45,
        sell: 48,
        name: "euro"
    },
]

function buyUE(wallet , fn){
    console.log("Cчёт:" , " Доллары -" ,parseInt(`${wallet.amountUsa}`) , " Евро -" , parseInt(`${wallet.amountEuro}`) , " Гривны -" , parseInt(`${wallet.amountUa}`))
    if (userWallet.amountUa <= 0){
        return  console.log("Обмен не возможен")
    }
    fn.forEach(arg =>{
        if (arg.name == "usa"){
            console.log("User может купить" , Math.ceil(`${wallet.amountUa / arg.buy}`) , "Долларов")
        }
        else if(arg.name == "euro"){
            console.log("User может купить" , Math.ceil(`${wallet.amountUa / arg.buy}`) , "Евро")
        }
    })
}

function sellUE(walUsa , walEuro, fn) {
    let all = 0;
    for (const arg of fn){
        if (arg.name == "usa"){
           all += walUsa * arg.buy
        }
        else {
            all += walEuro * arg.buy
        }
    }
    console.log("Если пользователь продаст все свои збережения он получит - " , `${all}`)
}
console.log("--------------Первый под пункт--------------")
buyUE(userWallet , bank)
console.log("--------------Второй под пункт--------------")
sellUE(userWallet.amountUsa , userWallet.amountEuro , bank)
// 2)Створити функцію move(яка повертає на скільки кроків змістився користувач ).
// Створити функцію moveUser яка отримує напрямок переміщення і функцію move як колбек.
// // moveUser ('north', move, 10) повина повернути ( Юзер перемістився на північ на 10 кроків)
console.log("---------------------Второе задание----------------------")
let move = (move) => `${move}`;

function moveUser (direction , fn , move){
    console.log("Юзер перемістився на" , `${direction}` , "на" , `${fn(move)}`)
}

moveUser("north" , move , "10")
// 3) Створіть массив в якому видаляється кожний другий елемент ["Keep", "Remove", "Keep", "Remove", "Keep", ...] в результаті повинен бути ось такий новий массив
// ["Keep", "Keep", "Keep", ...], Врахувати що массив може бути пустий, повернути помилку в разі пустого масиву

console.log("---------------------Третье задание----------------------")
const Arr = ["Keep", "Remove", "Keep", "Remove", "Keep" ,"Remove" , "Keep"];


        if (Arr.length == 0) {
            alert("Alert Empty Array")
        }
        else {
            for(i = 0; i < Arr.length; i++) {
                Arr.splice(i + 1,1);
        }
}

console.log(Arr)
// // // 4) Створити функцію яка обробляє массив обєктів і вираховує площу фігури в обєкті
console.log("---------------------Четвёртое задание----------------------")
    let figurs = [
    {
        figure:"circle",
        radius: 10
    },
    {
        figure:"Squar",
        sizeA: 4,
        sizeB: 4
    },
    {
        figure:"Rectangle",
        sizeA: 4,
        sizeB: 8
    }
]
function Square() {
    figurs.forEach(arg => {
        if (arg.figure == 'circle') {
            arg.SquareC = Math.ceil(Math.PI * Math.ceil(Math.pow(arg.radius, 2)))
            console.log("Фигура - " , `${arg.figure}` , "    " , "Радиус - " ,`${arg.radius}` , "    " , "Площадь - " , `${arg.SquareC}`)
        }
        else if (arg.figure == 'Squar' || arg.figure == "Rectangle"){
            arg.SquareSR = arg.sizeA * arg.sizeB
            console.log("Фигура -" ,`${arg.figure}`, "    " , `Cторона А - ${arg.sizeA}  Cторона Б - ${arg.sizeB}` , "    " , "Площадь - " , `${arg.SquareSR}`)
        }

    })
}
console.log(figurs)
Square()

// // 5) Свторити новий массив який використовує массив [2,3,5,4,8,7,9,10] і перемножує парні значення на 4
console.log("---------------------Пятое задание----------------------")
const  doubleValuue = function (item){
    return item*4;
}

const oldArr = [2,3,5,4,8,7,9,10];

function doubleArr(arr , fn){
    let newArr = [];
    for (i = 0 ; i < oldArr.length; i++){
        if ((oldArr[i] % 2) == 0){
            newArr.push(fn(arr[i]));
        }
    }
    return newArr;
}

console.log(doubleArr(oldArr , doubleValuue))
// // 6) Створити функцію яка округлює значення массива в більшу сторону [2.5,3.2,5.4,4.6,8.3,7.1,9.5,10.02]
console.log("---------------------Шестое задание----------------------")
arrRound = [2.5,3.2,5.4,4.6,8.3,7.1,9.5,10.02]

function round(Round){

    for (i = 0; i < Round.length; i++){
        Round[i] = Math.ceil(Round[i])
    }
}

round(arrRound)
console.log(arrRound)
// // 7)Створити функцію яка повертає массив довжиною 10 в якому всі значення random від 0 до 100
console.log("---------------------Седьмое задание----------------------")
function random(){
    let arr = [];
    for (i = 0; i < 10; i++){
        let randomNum = (Math.round(Math.random()*100))
        arr.push(randomNum)
    }
    console.log(arr)
}

random()