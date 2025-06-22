function arithmeticSimple() {
    alert('Добро пожаловать в игру Простая арифметика');
    alert('Будут предложены случайные задачи на сложение, вычитание, умножение и деление. Попробуй решить их все');

    function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    let a=getRandomInt(1, 20);
    let b=getRandomInt(1, 20);
    let c=getRandomInt(1, 20);
    let d=getRandomInt(1, 20);
    let e=getRandomInt(1, 20);
    let f=getRandomInt(1, 20);
    let g=getRandomInt(1, 20);
    let div=getRandomInt(1, 20);
    let summ=a+b;
    let diff=c-d;
    let mult=e*f;
    let h=g*div;
        
    let userSumm = Number(prompt(`${a} + ${b} =`));
    let userDiff = Number(prompt(`${c} - ${d} =`));
    let userMult = Number(prompt(`${e} * ${f} =`));
    let userH = Number(prompt(`${h} / ${g} =`));

    alert(`${a} + ${b} = ${summ} ваш ответ ${userSumm}
${c} - ${d} = ${diff} ваш ответ ${userDiff}
${e} * ${f} = ${mult} ваш ответ ${userMult}
${h} / ${g} = ${div}  ваш ответ ${userH}`);

    if (summ==userSumm && diff==userDiff && mult==userMult && div==userH) {
        alert('все верно!!!')
    } else {
        alert('есть ошибка')
    }
}