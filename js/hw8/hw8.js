//задание 1
const people = [
   { name: 'Глеб', age: 29, gender: 'male'},
   { name: 'Анна', age: 17, gender: 'female'},
   { name: 'Олег', age: 7, gender: 'male'},
   { name: 'Оксана', age: 47, gender: 'female'}
];
// Допишите колбэк для sort, изучите, как работает колбэк, в документации
console.log(people.sort((a, b)=>a.age-b.age));

//задание 2
function isPositive(num) {
    return num>0;
}

function filter(arr, rule) {
    const result=[];
    for (let i = 0; i < arr.length; i++) {
        if (rule(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

function isMale(person) {
    return person.gender==='female';
}
console.log(filter(people, isMale));

//задание 3

let timerId = setInterval(() => console.log(new Date()), 3000);

setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);

//задание 4

function delayForSecond(callback) {
    // Код писать можно только внутри этой функции
   setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

//задание 5

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log('Привет, ${name}!'); //в этой строке нельзя менять код по заданию
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(function() {
    sayHi('Глеб')
});
