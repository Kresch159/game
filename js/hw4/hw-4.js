/*задание 1*/
let a = 1;

while (a <= 2) {
    console.log('Привет!');
    a++;
}
/*задание 2*/
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
/*задание 3*/
let b = 7;

while (b <= 22) {
    console.log(b);
    b++;
}
/*задание 4*/
let obj = {
  "Коля": '200',
  "Вася": '300',
  "Петя": '400'
};

for (let name in obj) {
  console.log(name + " — зарплата " + obj[name] + " долларов");
}
/*задание 5*/
let n = 1000;
let num = 0;
while (n > 50) {
    n = n / 2;
    num++;
}
console.log('Oтвет ' + n);
console.log(`Kоличество итераций ${num}`);
/*задание 6*/
let day=1;
let friday=2;

while (day<=31) {
    if (day==friday) {
        console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
        friday+=7;
    }else{
        day++;
    }
}
