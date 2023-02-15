// console.log("Задание 1");

// let kmH=+prompt("Введите скорость в км/ч");
// let mS=+prompt("Введите скорость в м/с");


// console.log(`${kmH} км/ч соответствует ${kmH/3.6} м/с`);
// console.log(`${mS} м/с соответствует ${mS*3.6} км/ч`);

// console.log("Задание 2");

// let a=+prompt("Введите сторону a");
// let b=+prompt("Введите сторону b");
// let c=+prompt("Введите сторону c");


// if (a+b>c && a+c>b && b+c>a) {
//     let P=a+b+c;
//     let p=P/2;
//     let S=Math.sqrt(p*(p-a)*(p-b)*(p-c));
//     console.log(`Треугольник существует \n Периметр=${P} \n Площадь=${S} \n Соотношение=${P/S}`);
// } else {
//     console.log(`Треугольник не существует`);
// }

// console.log("Задание 3");

// let num=Number(prompt("Введите число"));

// while (isNaN(num)) {
//     num=Number(prompt("Введен неверный тип данных, введите число"));
// }

// for (let i=0;i<=num;i++) {
//     if (i%2==0) {
//         console.log(i+ " buzz");
//     } else if(i%5==0) {
//         console.log(i+ " fizz buzz");
//     } else {
//         console.log(i+ " fizz");
//     }
// }

// console.log("Задание 4");

// let tree="";

// for (let i=0;i<13;i++) {
//     if (i%2==0) {
//         tree+="#".repeat(i);
//         tree+="\n";
//     }
//     else {
//         tree+="*".repeat(i);
//         tree+="\n";
//     }
// }

// console.log(tree+"||");

// console.log("Задание 5");

// let myNum=59;

// let num=Number(prompt("Введите число"));

// while (isNaN(num)) {
//     num=Number(prompt("Введен неверный тип данных, введите число"));
// }

// while (num!==myNum) {
//     if (num>myNum) {
//         console.log("Ваше число больше");
//     }
//     else if (num<myNum) {
//         console.log("Ваше число меньше");
//     }
//     num=Number(prompt("Введите число"));
// }

// console.log("Угадано");

console.log("Задание 6");

let n=prompt("Введите n");
let x=prompt("Введите x");
let y=prompt("Введите y");


while (n>0 && x>0 && y>0) {
    let string=`n= ${n}, x= ${x}, y= ${y} => `;
    if (n%x===0 && n%y===0) {
        string+=`true`;
    }
    else {
        string+=`false`;
    }
    console.log(string);
    n=prompt("Введите n");
    x=prompt("Введите x");
    y=prompt("Введите y");

}

// console.log("Задание 7");

// let month=Number(prompt("Введите номер месяца"));

// let i=0;

// while (month>12||month<1) {
//     month=Number(prompt("Введите корректный месяц"));
// }

// i=1;
// let quarter;

// while (i==1) {
//     if (month%3===0) {
//         quarter=Math.trunc(month/3);
//     }
//     else {
//         quarter=Math.trunc(month/3)+1;
//     }
//     console.log(`месяц ${month} -> ${quarter} квартал`);
//     month=Number(prompt("Введите номер месяца"));
//     while (month>12||month<1) {
//         month=Number(prompt("Введите корректный месяц"));
//     }
// }
