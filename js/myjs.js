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
            alert("Введите E-mail")
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

//----------------------------------------------------------------------------------------------------------
//Функция для валидации формы ПОИСКА

function searchValidate() {
    var searchArea = document.getElementById('selectArea')
    var petsVid = document.searchPets.inputPetsVid

    if (searchArea.value !== "" && petsVidValidate(petsVid)) {
        return true
    } else {
        return false;
    }
}

function petsVidValidate(petsVid) {
    var pets = /^[a-zA-Z]$/

    if(petsVid.value.match(pets)) {
        return true
    }
    else {
        alert("Поле ВИД ЖИВОТНОГО может содержать символы Аа-Яя")
        petsVid.focus()
        return false
    }
}

//----------------------------------------------------------------------------------------------------------
//Функция для валидации формы ДОБАВЛЕНИЯ ОБЪЯВЛЕНИЯ
function addPetsValidate() {
    var uName = document.addPets.userNameForAdd
    var uPhone = document.addPets.userPhoneForAdd
    var accLogin = document.addPets.userEmailForAdd
    var petPhoto = document.addPets.petPhotoForAdd
    var petDiscr = document.addPets.petDiscrForAdd
    var uConfig = document.addPets.config

    if (userNameValid(uName)) {
        if (userPhoneValid(uPhone)) {
            if (accLoginValidate(accLogin)) {
                if (petAddPhotoValid(petPhoto)) {
                    if (petDisValid(petDiscr)) {
                        if (configForAddValid(uConfig)) {
                                alert("ОбЪявление успешно добавлено!!!")
                            }
                        }
                    }
                }
        }
        return false;
    }
}

function petAddPhotoValid(petPhoto) {
    if (document.getElementById('photo1').value !== "") {
        return true
    }
    else {
        alert("Загрузите ОДНО ФОТО животного")
        petPhoto.focus()
        return false
    }
}

function petDisValid(petDiscr) {
    if (document.getElementById('petDiscrForAdd').value !== "") {
        return true
    }
    else {
        petDiscr.style.borderColor = 'red'
        alert("Дайте КРАТКОЕ ОПИСАНИЕ животного")
        petDiscr.focus()
        return false
    }
}

function configForAddValid(uConfig) {
    const config = document.getElementById('config');

    if(config.checked) {
        return true
    }
    else {
        alert("НЕ ПРИНЯТО согласие на обработку персональных данных")
        uConfig.focus()
        return false
    }
}

//----------------------------------------------------------------------------------------------------------
//Функция для валидации формы НОВОГО НОМЕРА ТЕЛЕФОНА

function newPhoneValidate() {
    var uPhone = document.newPhone.newPhone

    if(userPhoneValid(uPhone)) {
        alert("Номер телефона УСПЕШНО изменен!!!")
        return true
    }
    else {
        return false
    }
}

//----------------------------------------------------------------------------------------------------------
//Функция для валидации формы НОВОГО E-MAIL
function newEmailValidate() {
    var accLogin = document.newEmail.newEmail

    if (accLoginValidate(accLogin)) {
        alert("E-mail УСПЕШНО изменен!!!")
        return true
    }
    else {
        return false
    }
}

//----------------------------------------------------------------------------------------------------------
//Функция для возвращения на главную
function openIndex2() {
    document.getElementById('again')
        .addEventListener('click', () =>
            window.open('index2.html'));
}
