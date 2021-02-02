const email = document.querySelector('input[type=email]');
const btn = document.querySelector('button');
const warning = document.querySelector('.warning');
const iconError = document.querySelector('.icon-error');


btn.addEventListener('click',function(e){
    // prevent send data
    e.preventDefault();

    // validate email
    if(email.value === ''){
        warning.classList.add('active');
        iconError.classList.add('active');
        warning.innerHTML = 'Email cannot be empty !';
    } else{
        warning.classList.remove('active');
        iconError.classList.remove('active');
        if(email.validity.valid === false){
            warning.classList.add('active');
            iconError.classList.add('active');
            warning.innerHTML = 'Please provide a valid email !';
        }
    }
    
});