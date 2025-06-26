//задание 1
let text='js';
console.log(text);
console.log(text.toUpperCase());

//задание 2
function filterNowArr(arr, str) {
    const lowerStr=str.toLowerCase();
    return arr.filter(item=>item.toLowerCase().startsWith(lowerStr))
}
const word=['Привет', 'пробка','Проверка','перекладина','Периметр','Паркет','палатка','продолжение'];
const result=filterNowArr(word, 'пр');
console.log(result);

//задание 3
let num3=32.58884;
console.log(Math.floor(num3));
console.log(Math.ceil(num3));
console.log(Math.round(num3));

//задание 4
const arrNum=[52, 53, 49, 77, 21, 32];
const min=Math.min(...arrNum);
const max=Math.max(...arrNum);
console.log("Минимальное значение:", min);
console.log("Максимальное значение:", max);

//задание 5
function randomNum() {
    let num5=Math.ceil(Math.random()*10);
    console.log(num5);
}
randomNum();

//задание 6

function arrRandomNum() {
    const arr6=[];
    let num6=Number(prompt('введите любое число для задания 6'));
    for (let i=0; i<Math.floor(num6/2); i++) {
    let num=Math.round(Math.random()*num6);
    arr6.push(num);    
}
    return arr6
}
console.log(arrRandomNum());


//задание 7
function randomNumberMit(min7, max7) {
    // min и max включительно
    return Math.ceil(Math.random()*(max7-min7)+min7);
}
const min7=Number(prompt("Введите минимальное целое число"));
const max7=Number(prompt("Введите максимальное целое число"));
if (isNaN(min7) || isNaN(max7) || min7>max7) {
    console.log("Некорректный ввод!");
} else {
    const randomNumber = randomNumberMit(min7, max7);
    console.log(`Случайное число от ${min7} до ${max7}: ${randomNumber}`);
}

//задание 8
let currentDate = new Date();
console.log(currentDate);

//задание 9
currentDate.setDate(currentDate.getDate()+73);
console.log(`${currentDate} через 73 дня`);

//задание 10
function formatDate(date) {
    const days=["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const months=["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    const day=date.getDate();
    const month=months[date.getMonth()];
    const year=date.getFullYear();
    const dayOfWeek=days[date.getDay()];

    const hours=date.getHours();
    const minutes=date.getMinutes();
    const seconds=date.getSeconds();

    return `
    Дата: ${day} ${month} ${year} — это ${dayOfWeek}.
    Время: ${hours}:${minutes}:${seconds}`;
}

const now = new Date();
console.log(formatDate(now));
