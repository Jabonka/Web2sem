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

// let numb=Number(prompt("Введите число"));

// while (isNaN(numb)) {
//     numb=Number(prompt("Введен неверный тип данных, введите число"));
// }

// while (numb!==myNum) {
//     if (numb>myNum) {
//         console.log("Ваше число больше");
//     }
//     else if (numb<myNum) {
//         console.log("Ваше число меньше");
//     }
//     numb=Number(prompt("Введите число"));
// }

// console.log("Угадано");

// console.log("Задание 6");

// let n=prompt("Введите n");
// let x=prompt("Введите x");
// let y=prompt("Введите y");


// while (n>0 && x>0 && y>0) {
//     let string=`n= ${n}, x= ${x}, y= ${y} => `;
//     if (n%x===0 && n%y===0) {
//         string+=`true`;
//     }
//     else {
//         string+=`false`;
//     }
//     console.log(string);
// }

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
// }


let a=+prompt(`Введите номер задания`);

switch(a) {
    case 1:
        console.log(`Задание 1`);
        let c=+prompt(`Введите 1, если скорость выражена в км/ч. Иначе 0.`);
        let speed=+prompt("Введите скорость");
        while (isNaN(speed)||(c!==1 && c!==0)) {
            if (isNaN(speed)){
                speed=+prompt("Введите скорость");
            }
            if (c!==1 && c!==0) {c=+prompt(`Введите 1, если скорость выражена в км/ч. Иначе 0.`);}
        }
        c=Boolean(c);
        let answer=``;
        function convertSpeed(sp,k) {
            if (k===true) {
                answer+=`ConvertSpeed(${sp},'to M/s')-> ${sp/3.6} M/s`;
            }
            else {
                answer+=`ConvertSpeed(${sp},'to Km/h')-> ${sp*3.6} Km/h`;
            }
            return answer;
        }
        console.log(convertSpeed(speed,c));
        break;
    case 2:
        console.log(`Задание 2`);
        let k = +prompt("Введите число");
        while (isNaN(k)) {
            k = +prompt("Введите ЧИСЛО!!!");
        }
        let str = ``;
        function ABS(a) {
            if(a>=0){
                str = `absValue(${a}) -> ${a}`;
            }
            else{
                str = `absValue(${a}) -> ${-1*a}`;
            }
            return str;
        }
        console.log(ABS(k));
        break;
    case 3:
        let student = {
            group: 201,
            last_name: "Иванов",
            first_name: "Иван"
            };
        let arr1=[];
        let arr2=[];
        for (key in student) {
            arr1.push(key);
            arr2.unshift(student[key]);
        }
        console.log("Список свойств: "+ arr1);
        console.log(`Студент ${arr2[0]} ${arr2[1]} учится в ${arr2[2]} группе`);
        break;
    case 4:
        let num1=+prompt("Введите первое число");
        let num2=+prompt("Введите второе число");
        while (isNaN(num1)||isNaN(num2)) {
            if (isNaN(num1)) {
                num1=+prompt("Введите первое число");
            }
            if (isNaN(num2)) {
                num2=+prompt("Введите второе число");
            } 
        }
        function Randomazer(min,max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let answ=``;
        if (num1<num2) {
            answ=`randomNumber(${num1},${num2})-> ${Randomazer(num1,num2)}`
        }
        else {
            answ=`randomNumber(${num2},${num1})-> ${Randomazer(num2,num1)}`
        }
        console.log(answ);
        break;
    case 5:
        function SampArray(mass,count){
            let mass1 = [];
            for(let i=0;i<count;i++){
                mass1[i]=mass[Randomazer(0,4)];
            }
            return `sampleArray([${mass}], ${count}) -> [${mass1}]`
        }
        let mass = [1,2,3,4];
        let count = prompt('Введите количество чисел от 1 до 4');
        console.log(SampArray(mass,count));
    // default:
    //     a=+prompt(`Введите номер задания от 1 до 5`);
    //     break;
}

// function ShowPass(event){
//     const showBtn = event.currentTarget;
//     const form = showBtn.closest("form");
//     const passInput = form.querySelector("[name='password']");

//     if (passInput.type === "text") {
//         passInput.type = "password";
//     }
//     else {
//         passInput.type = "text";
//     }
// }

// function sendForm(event) {
//     event.preventDefault();

//     const registerForm = event.currentTarget;
//     const formData = new FormData(registerForm);

//     console.table({
//         "Email": formData.get("email"),
//         "Пароль": formData.get("password"),
//     });
// }

// const modal = document.getElementById("modal");
// const btn = document.getElementById("btn");
// const span = document.getElementsByClassName("close")[0];
// const showpass=document.querySelector('.showpassword');

// btn.onclick = function(){
//     modal.style.display = "block";
// }
// span.onclick = function(){
//     modal.style.display = "none";
// }

// window.onclick = function(event){
//     if(event.target == modal){
//         modal.style.display= "none";
//     }
// }

// const registerForm = document.getElementById("reg");
// registerForm.addEventListener("submit", sendForm);

// showpass.addEventListener("pointerup", ShowPass);
// showpass.addEventListener("pointerdown", ShowPass);