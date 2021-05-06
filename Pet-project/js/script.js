window.addEventListener('load', () => {
    let body = document.body;
    let logInBtn = document.querySelector('#log_in');
    let logInForm = document.querySelector('.log__in');
    let contentWrap = document.querySelector('.content__wrapper');
    let formLogInBtn = document.querySelector('#form_log_in_btn');
    let logInValue = document.querySelector('#login_value');
    let passValue = document.querySelector('#pass_value');
    let welcomeText = document.querySelector('.welcome');
    let exitBtn = document.querySelector('.exit');
    let arrow = document.querySelector('.arrow_wrapper');

    logInBtn.addEventListener('click', () => {
        body.style.overflow = 'hidden'
        contentWrap.style.opacity = '0.2';
        logInForm.style.display = 'flex';
    })

    formLogInBtn.addEventListener('click', () => {
        let passRegExp = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g

        if (logInValue.value != '' && passValue.value != '' && passRegExp.test(passValue.value)) {
            body.style.overflow = '';
            contentWrap.style.opacity = '1';
            logInForm.style.display = 'none';
            window.localStorage.setItem(logInValue.value, passValue.value);
            logInBtn.style.display = 'none';
            welcomeText.innerHTML = `Welcome, ${logInValue.value}`
            exitBtn.style.display = 'flex';
            logInValue.value = '';
            passValue.value = '';
        } else if (!passRegExp.test(passValue.value)) {
            alert('Incorrect info');
            passValue.style.backgroundColor = 'red'
            passValue.addEventListener('click', () => {
                passValue.value = '';
                passValue.style.backgroundColor = '';
            })
        }

    })

    exitBtn.addEventListener('click', () => {
        exitBtn.style.display = 'none';
        welcomeText.innerHTML = '';
        logInBtn.style.display = 'flex';
    })

    function scrolling() {
        window.addEventListener('scroll', (e) => {
            if (pageYOffset > 800) {
                arrow.style.display = 'flex'
            } else {
                arrow.style.display = 'none'
            }
        })
        arrow.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        })
    }
    scrolling()

})