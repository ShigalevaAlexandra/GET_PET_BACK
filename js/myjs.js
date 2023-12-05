function formValidation() {
    var uName = document.reg.userName
    var uPhone = document.reg.userPhone
    var uPassword = document.reg.userPass
    var uPasswordConfig = document.reg.userPassConfig
    var uConfig = document.reg.config

    let input = document.getElementById('InputName')
    var newProfile = document.getElementById('profile_name')

    if (userNameValid(uName)) {
        if(userPhoneValid(uPhone)) {
            if(userPass(uPassword)) {
                if(userPassConfigValid(uPasswordConfig)) {
                    if(configValid(uConfig)){
                        document.getElementById('registration')
                            .addEventListener('click', () => window.open('index2.html'));

                        newProfile.textContent = input.value;
                    }
                }
            }
        }
    }

    return false;
}

function userNameValid(uName) {
    var rools = /[а-яА-Я- ]+$/;

    if(uName.value.match(rools)) {
        return true
    }
    else {
        alert("ИМЯ может содержать символы: Аа-Яя, -, пробел")
        uName.focus()
        return false
    }
}

function userPhoneValid(uPhone) {
    var rools = /[+7][0-9]+$/

    if(uPhone.value.match(rools)) {
        return true
    }
    else {
        alert("MOБ. ТЕЛЕФОН имеет формат +79999999999")
        uPhone.focus()
        return false
    }
}

function userPass(uPassword) {
    var rools_1 = /^[a-zA-Z0-9]{7,}$/
    var rools_2 =  /[0-9]{1,6}/

    if(uPassword.value.match(rools_1)) {
        if(uPassword.value.match(rools_2)) {
            return true
        }
    }
    else {
        alert("ПАРОЛЬ не соответствует правилам")
        uPassword.focus()
        return false
    }
}

function userPassConfigValid(uPasswordConfig) {
    var value = document.getElementById('InputPassword');
    var configValue = document.getElementById('InputPasswordConfirm');

    if (value.value === configValue.value) {

        return true
    }
    else {
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

