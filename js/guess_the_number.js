alert('Добро пожаловать в игру Угадай число');
alert('Будет загодано число от 1 до 100');
alert('НАЧАТЬ!!!');
let gameNum = Math.floor(Math.random() * 100) + 1;
let userNum = Number(prompt('Угадай число'));
while (userNum != gameNum) {
    if (userNum < gameNum) {
        alert('больше');
    } else {
        alert('меньше');
    }
    userNum = Number(prompt('Попробуй ещё раз, ты близко'));
} 
if (userNum == gameNum) {
    alert('Победа!!!');
}
