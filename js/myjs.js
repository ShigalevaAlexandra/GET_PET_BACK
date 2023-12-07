//функция для валидации формы "РЕГИСТРАЦИЯ"
function formValidation() {
    var uName = document.reg.userName
    var uPhone = document.reg.userPhone
    var uPassword = document.reg.userPass
    var uPasswordConfig = document.reg.userPassConfig
    var uConfig = document.reg.config

    if (userNameValid(uName)) {
        if (userPhoneValid(uPhone)) {
            if (userPass(uPassword)) {
                if (userPassConfigValid(uPasswordConfig)) {
                    if (configValid(uConfig)) {
                        document.getElementById('registration')
                            .addEventListener('click', () =>
                                window.open('index2.html'));
                    }
                }
            }
        }
    return false;
    }
}

function userNameValid(uName) {
    var name = /[а-яА-Я- ]+$/;

    if(uName.value.match(name)) {
        uName.style.borderColor = 'green'
        return true
    }
    else {
        uName.style.borderColor = 'red'
        alert("ИМЯ может содержать символы: Аа-Яя, -, пробел")
        uName.focus()
        return false
    }
}

function userPhoneValid(uPhone) {
    var phone = /[+7][0-9]+$/

    if(uPhone.value.match(phone)) {
        uPhone.style.borderColor = 'green'
        return true
    }
    else {
        uPhone.style.borderColor = 'red'
        alert("MOБ. ТЕЛЕФОН имеет формат +79999999999")
        uPhone.focus()
        return false
    }
}

function userPass(uPassword) {
    var pass1 = /^[a-zA-Z0-9]{7,}$/
    var pass2 =  /[0-9]{1,6}/

    if(uPassword.value.match(pass1)) {
        if(uPassword.value.match(pass2)) {
            uPassword.style.borderColor = 'green'
            return true
        }
    }
    else {
        uPassword.style.borderColor = 'red'
        alert("ПАРОЛЬ не соответствует правилам")
        uPassword.focus()
        return false
    }
}

function userPassConfigValid(uPasswordConfig) {
    var value = document.getElementById('InputPassword');
    var configValue = document.getElementById('InputPasswordConfirm');

    if (value.value === configValue.value) {
        uPasswordConfig.style.borderColor = 'green'
        return true
    }
    else {
        uPasswordConfig.style.borderColor = 'red'
        alert("Введенные ПАРОЛИ не совпадают")
        uPasswordConfig.focus()
        return false
    }
}

function configValid(uConfig) {
    const config = document.getElementById('confirm');

    if(config.checked) {
        return true
    }
    else {
        alert("НЕ ПРИНЯТО согласие на обработку персональных данных")
        uConfig.focus()
        return false
    }
}

// -----------------------------------------------------------------------------------------------

//функция для валидации формы "ВХОД В ЛИЧНЫЙ КАБИНЕТ"
function formAccountValidation() {
    var accLogin = document.acc.accountLogin
    var accPassword = document.acc.accountPassword

    if (accLoginValidate(accLogin) && accPasswordValidate(accPassword)) {
        document.getElementById('account')
            .addEventListener('click', () =>
                window.open('index2.html'));
    } else {
        alert("Введенные данные неверные")
        return false;
    }
}
function accLoginValidate(accLogin) {
    var login = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/

    if(accLogin.value.match(login)) {
        return true
    }
    else {
        if(accLogin.value === "") {
            alert("Введите логин")
        }

        accLogin.focus()
        return false
    }
}

function accPasswordValidate(accPassword) {
    var accPass1 = /^[a-zA-Z0-9]{7,}$/
    var accPass2 =  /[0-9]{1,6}/

    if(accPassword.value.match(accPass1)) {
        if(accPassword.value.match(accPass2)) {
            return true
        }
    }
    else {
        if(accPassword.value === "") {
            alert("Введите пароль")
        }

        accPassword.focus()
        return false
    }
}
