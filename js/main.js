const app = {
    interest: null,
    email: null,
    init: function () {
        document.querySelector('.sign-up').addEventListener('click', app.validation);
        let di = document.querySelectorAll('.dropdown-item');
        di.forEach(i => {
            i.addEventListener('click', app.selectInterest);
        });
    },
    validation: function (ev) {
        ev.preventDefault();
        app.email = document.getElementById('inputCity').value;
        let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let emailField = document.querySelector('.email-input');
        if (emailPattern.test(app.email)) {
            let err = document.querySelector('.err');
            if (!!document.querySelector('.err')) {
                emailField.removeChild(document.querySelector('.err'));
            };

            app.submit();
        } else {


            if (!!document.querySelector('.err')) {
                emailField.removeChild(document.querySelector('.err'));
            }
            let errMessage = document.createElement('p');

            errMessage.className = 'err';
            errMessage.textContent = 'Please enter a valid email address';
            emailField.appendChild(errMessage);
        }
    },
    selectInterest: function (ev) {
        ev.preventDefault();
        app.interest = ev.currentTarget.textContent;
        let selectButton = document.querySelector('.select-button');
        selectButton.innerHTML = app.interest+'<span class="seperator"></span>';
        selectButton.style.color = 'black';
    },
    submit: function () {
        console.log('Email Address: '+app.email);
        if(app.interest) {
            console.log('Interested in: '+app.interest);
        } else {
            app.interest = 'Interested in: Not specified';
            console.log(app.interest);
        };
    },
}

document.addEventListener('DOMContentLoaded', app.init);
