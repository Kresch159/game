/*задание 1*/
function little(a,b) {
    if (a<b) {
    console.log(`${a} меньше`);
    } else {
    console.log(`${b} меньше`);
    }
}

little(13,12);

/*задание 2*/
function evenNumber(n) {
    return n%2==0;
}

if (evenNumber(16)) {
    console.log('Число четное');
} else {
    console.log('Число нечетное');
}

/*задание 3*/
function sqrNumber(num) {
    console.log(num**2);
}
sqrNumber(11);

function getSqr(num) {
    return num**2;
}

let result = getSqr(7);
console.log(result);

/*задание 4*/
function ageRange() {
    age = Number(prompt('Сколько вам лет?'))
    if (age<0) {
        console.log('Вы ввели неправильное значение');
    } else if (age>12) {
        console.log('Добро пожаловать!');
    } else {
        console.log('Привет, друг!');
    }
}
ageRange();

/*задание 5*/
function checkNum() {
    let a = Number(prompt('Введите первое число'));
    let b = Number(prompt('Введите второе число'))
    if (typeof a === 'number' && !isNaN(a) && typeof b === 'number' && !isNaN(b)) {
        console.log(`Произведение чисел ${a*b}`);
    } else {
        console.log('Одно или оба значения не являются числом')
    }
}
checkNum();

/*задание 6*/
function checkKub() {
    let n = Number(prompt('Введите число'));
    if (isNaN(n)) {
        console.log('Переданный параметр не является числом');
    } else {
        console.log(`${n} в кубе равняется ${n**3}`);
    }
}
checkKub();

/*задание 7*/
let circle1 ={
    radius: 7,
    getArea: function() {
        return Math.PI*this.radius**2;
    },
    getPerimeter: function() {
        return 2*Math.PI*this.radius;
    }
}
let circle2 ={
    radius: 13,
    getArea: function() {
        return Math.PI*this.radius**2;
    },
    getPerimeter: function() {
        return 2*Math.PI*this.radius;
    }
}

console.log('площадь первого круга', circle1.getArea());        
console.log('периметр первого круга', circle1.getPerimeter()); 
console.log('площадь второго круга', circle2.getArea());         
console.log('периметр второго круга', circle2.getPerimeter()); 