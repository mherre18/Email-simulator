const email = document.getElementById('email');
const submit = document.getElementById('submit');
const message = document.getElementById('message');
const btnSend = document.getElementById('send');
const formSend = document.getElementById('send-email');
const resetBtn = document.getElementById('resetBtn');

eventListeners();

function eventListeners() {

    document.addEventListener('DOMContentLoaded', startApp);

    email.addEventListener('blur', validStack);
    submit.addEventListener('blur', validStack);
    message.addEventListener('blur', validStack);

    formSend.addEventListener('submit', sendEmail);

    resetBtn.addEventListener('click', resetForm);
}

function startApp() {
    btnSend.disabled = true;
}

function validStack() {
    //console.log('Inside imput');

    checkLength(this);

    if(this.type === 'email') {
        checkEmail(this);
    }

    let errors = document.querySelectorAll('.error');

    if(email.value !== '' && submit.value !== '' && message.value !== '') {
        if(errors.length === 0){
            btnSend.disabled = false;
        }
        
    }
}

function checkLength(stack) {
    //console.log(stack);

    if(stack.value.length > 0) {
        stack.style.borderBottomColor = 'blue';
        stack.classList.remove('error');
    } else {
        stack.style.borderBottomColor = 'red';
        stack.classList.add('error');
    }
}

function checkEmail(stack) {
    const message = stack.value;
    if(message.indexOf('@') !== -1){
        stack.style.borderBottomColor = 'blue';
        stack.classList.remove('error');
    } else {
        stack.style.borderBottomColor = 'red';
        stack.classList.add('error');
    }
}

function sendEmail(e) {
    //console.log('mail sent');
        const spinnerGif = document.querySelector('#spinner');
        spinnerGif.style.display = 'block';

        const sent = document.createElement('img');
        sent.src = 'img/mail.gif';
        sent.style.display = 'block';

        setTimeout(function() {
            spinnerGif.style.display = 'none';

            document.querySelector('#loaders').appendChild(sent);

            setTimeout(function() {
                sent.remove();

                formSend.reset();

            }, 5000);
        }, 3000);
    
    e.preventDefault();
}

function resetForm(e) {
    formSend.reset();
    e.preventDefault();

}