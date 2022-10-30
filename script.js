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

function buyUE(){
    console.log("Cчёт:" , " Доллары -" ,parseInt(`${userWallet.amountUsa}`) , " Евро -" , parseInt(`${userWallet.amountEuro}`) , " Гривны -" , parseInt(`${userWallet.amountUa}`))
    if (userWallet.amountUa <= 0){
        return  console.log("Обмен не возможен")
    }
    bank.forEach(arg =>{
        if (arg.name == "usa"){
            console.log("User может купить" , Math.ceil(`${userWallet.amountUa / arg.buy}`) , "Долларов")
        }
        else if(arg.name == "euro"){
            console.log("User может купить" , Math.ceil(`${userWallet.amountUa / arg.buy}`) , "Евро")
        }
    })
}

function sellUE() {
    bank.forEach(arg =>{
        if (arg.name == "usa"){
            console.log("Если User продаст Доллары он получит" , Math.ceil(`${userWallet.amountUsa * arg.sell}`) , "Гривен")
        }
        else if (arg.name == "euro"){
            console.log("Если User продаст Eвро он получит" , Math.ceil(`${userWallet.amountEuro * arg.sell}`) , "Гривен")
        }
    })
}
console.log("--------------Первый под пункт--------------")
buyUE()
console.log("--------------Второй под пункт--------------")
sellUE()
// 2)Створити функцію move(яка повертає на скільки кроків змістився користувач ).
// Створити функцію moveUser яка отримує напрямок переміщення і функцію move як колбек.
// // moveUser ('north', move, 10) повина повернути ( Юзер перемістився на північ на 10 кроків)
console.log("---------------------Второе задание----------------------")
let move = (move) => `${move}`;

function moveUser (direction , move , fn){
    console.log("Юзер перемістився на" , `${direction}` , "на" , `${fn(move)}`)
}

moveUser("north" , "10" , move)
// 3) Створіть массив в якому видаляється кожний другий елемент ["Keep", "Remove", "Keep", "Remove", "Keep", ...] в результаті повинен бути ось такий новий массив
// ["Keep", "Keep", "Keep", ...], Врахувати що массив може бути пустий, повернути помилку в разі пустого масиву
//
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
        else if (arg.figure == 'Squar'){
            arg.SquareS = arg.sizeA * arg.sizeB
            console.log("Фигура -" ,`${arg.figure}`, "    " , `Cторона А - ${arg.sizeA}  Cторона Б - ${arg.sizeB}` , "    " , "Площадь - " , `${arg.SquareS}`)
        }
        else {
            arg.SquareR = 1/2 * (arg.sizeA * arg.sizeB)
            console.log("Фигура -" ,`${arg.figure}`, "    " , `Cторона А - ${arg.sizeA}  Высота - ${arg.sizeB}` , "    " , "Площадь - " , `${arg.SquareR}`)
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

function doubleArr(arr , arr2){
    let newArr = [];
    for (i = 0 ; i < oldArr.length; i++){
        if (oldArr[i] % 2){
            delete arr[i]
        }
        else {
            newArr.push(arr2(arr[i]));
        }
    }
    return newArr;
}

console.log(doubleArr(oldArr , doubleValuue))
// // 6) Створити функцію яка округлює значення массива в більшу сторону [2.5,3.2,5.4,4.6,8.3,7.1,9.5,10.02]
console.log("---------------------Шестое задание----------------------")
arrRound = [2.5,3.2,5.4,4.6,8.3,7.1,9.5,10.02]

function round(){
    let newRound = []
    for (i = 0; i < arrRound.length; i++){
        let RoundNumbers = Math.ceil(arrRound[i])
        newRound.push(RoundNumbers)
    }
    console.log(newRound)
}

round()

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