let password;
let password_2;
password = prompt('Придумайте пароль');
password_2 = prompt('Введите пароль');

if (password_2 === password) {
    alert('Пароль введен верно')
} else {
    alert('Пароль введен неправильно')
}
