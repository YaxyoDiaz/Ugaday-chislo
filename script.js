// let a = 23

// alert(typeof a);

// Условия

// if(5 > 4) {
//     console.log('true');
// } else {
//     console.log('false');
// }


// Циклы

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Alert Prompt

// let name = prompt('Как тебя зовут')
// let age = +prompt('Сколько тебе лет?')
// let city = prompt('Где ты живешь?')

// alert('Привет ' + name + ' тебе ' + age + ' лет, ты живёшь в городе ' + city)

// alert(`Привет ${name}, тебе ${age} лет, ты живёшь в городе ${city}`)

// Привет name, тебе age лет, ты живешь в городе city



// Функция

// const sayHello = (name) => {
//     alert(`Привет ${name}`)
// }

// sayHello('Yahyo')



// Объекты

// let user = {
//     name: 'Yahyo',
//     surname: 'Hyde'
// }

// user.age = 18
// delete user.name

// console.log(user);




// let num1 = +prompt('Введите первое число')
// let num2 = +prompt('Введите второе число')

// if (25 > 21) {
//     alert(`первое число больше второго`)
// } else if (num1 < num2) {
//     console.log(trur);
//     alert(`Введите второе число`)
// } else {
//     console.log(false);
// }


// let number = +prompt('Введите число')

// if(number == 0) {
//     alert('Число равен нулю')
// } else if(number% 2 == 0){
//     alert('Число ЧЁТНОЕ')
// } else {
//     alert('Число НЕЧЁТНОЕ')
// }

let secretNumber = Math.floor(Math.random() * 11)
let guess = +prompt('Угадай число от 1 до 10')

if(guess == secretNumber) {
    alert('Ты угадал! Поздравляю😎' + secretNumber)
} else {
    alert('Не угадал! Попробуй ещё раз😭')
}