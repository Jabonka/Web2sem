function ShowPass(event){
    const showBtn = event.currentTarget;
    const form = showBtn.closest("form");
    const passInput = form.querySelector("[name='password']");

    if (passInput.type === "text") {
        passInput.type = "password";
    }
    else {
        passInput.type = "text";
    }
}

function sendForm(event) {
    event.preventDefault();

    const registerForm = event.currentTarget;
    const formData = new FormData(registerForm);

    console.table({
        "Email": formData.get("email"),
        "Пароль": formData.get("password"),
    });
}

function Proverka(event){
    const input = event.currentTarget;
    const validate = input.validity;
    
    let ErrorSms = ""
    if (validate.valueMissing) {
        ErrorSms = "Поле не заполнено"
    }
    else if(validate.tooShort){
        ErrorSms = `Минимальная длина ${input.minLength}` 
    }
    else if(validate.typeMismatch){
        ErrorSms = "Неправильный формат ввода"
    }
    else if(validate.valid){
        ErrorSms=""
    }

    input.setCustomValidity(ErrorSms);
    //input.reportValidity();

    const wrapper = input.closest(".input-error");
    const errorMsgElem = wrapper.querySelector(".error-message");

    errorMsgElem.textContent = ErrorSms;
}


const modal = document.getElementById("modal");
const btn = document.getElementById("btn");
const span = document.getElementsByClassName("close")[0];
const showpass=document.querySelector('.showpassword');

btn.onclick = function(){
    modal.style.display = "block";
}
span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display= "none";
    }
}

const registerForm = document.getElementById("reg");
registerForm.addEventListener("submit", sendForm);

showpass.addEventListener("pointerup", ShowPass);
showpass.addEventListener("pointerdown", ShowPass);

registerForm.querySelectorAll("input").forEach(input => {
    input.addEventListener("blur",Proverka);
})
