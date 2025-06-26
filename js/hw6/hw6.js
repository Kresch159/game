//Задание1
const mission1=[1, 5, 4, 10, 0, 3];

for (let i=0; i<mission1.length; i++) {
   if (mission1[i]==10) {    
   console.log(mission1[i]);
   break;
   }
}

//Задание2
const mission2=[1, 5, 4, 10, 0, 3];
/*mission2.forEach((el, index) => {
    if (el==4) {
        console.log(`${index}: ${el}`);
    }   
});*/
const numFilter=mission2.findIndex(item=>item===4);
console.log(numFilter);

//Задание3
const mission3=[1, 3, 5, 10, 20];
let num3=mission3.join(' ');
console.log(num3);

//Задание4
const mission4=[];
for (let i=0; i<3; i++) {
    let innerMission4=[];
    for (let j=0; j<3; j++) {
        innerMission4.push(1);
    }
    mission4.push(innerMission4);
}
console.log(mission4);

//Задание5
const mission5=[1, 1, 1];

for (let j=0; j<3; j++) {
        mission5.push(2);
    }

console.log(mission5);

//Задание6
const mission6=[9, 8, 7, 'a', 6, 5];
mission6.sort();
mission6.pop()
console.log(mission6);

//Задание7
const mission7=[9, 8, 7, 6, 5];
let userNum7=Number(prompt('Угадай число из массива'));
if (mission7.includes(userNum7)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

//Задание8
let b='abcdef';
b=b.split('').reverse().join('');
console.log(b);

//Задание9
const mission9=[[1, 2, 3],
                [4, 5, 6]];
let mission9Now=[];
for (let mission9In of mission9) {
    for (let element of mission9In) {
        mission9Now.push(element);
    }
}
console.log(mission9Now);

//Задание10
const mission10=[];
for (let i=0; i<6; i++) {
    let num=Math.floor(Math.random() * 10) + 1;
    mission10.push(num);    
}
console.log(mission10);
for (let i=0; i<mission10.length-1; i++) {
    let summ=mission10[i]+mission10[i+1];
    console.log(summ);    
}

//Задание11
const mission11=[2, 3, 4, 5];
let mission11Now=[];
console.log(mission11); 
function sqrArr() {
    for (let i=0; i<mission11.length; i++) {
        let a=mission11[i]**2;
        mission11Now.push(a);
    }
}
sqrArr();
console.log(mission11Now); 

//Задание12
function getWordLengths(arr) {
    const lengths = [];
    for (let i = 0; i < arr.length; i++) {
        lengths.push(arr[i].length);
    }
    return lengths;
}

const words = ["яблоко", "банан", "киви"];
console.log(getWordLengths(words));

//Задание13
const mission13=[3, -1, 7, -5, 0, -2, 4]
function numMinus(arr) {
    return arr.filter(num=>num<0);
}
console.log(numMinus(mission13));

//Задание14
const mission14=[];
for (let i=0; i<10; i++) {
    let num=Math.floor(Math.random() * 10) + 1;
    mission14.push(num);    
}
let evenArr=mission14.filter(num=>num%2===0);
console.log('Исходный массив:', mission14);
console.log('Массив чётных значений:', evenArr);

//Задание15
const mission15=[];
for (let i=0; i<6; i++) {
    let num=Math.floor(Math.random() * 10) + 1;
    mission15.push(num);    
}
console.log('Исходный массив:', mission15);
let summ=0
for (let i=0; i<mission15.length; i++) {
    summ=mission15[i]+summ;    
}
console.log(`сумма ${summ}`);
let midSumm=summ/mission15.length;
console.log(`среднее значение ${midSumm}`);