import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state'; 

const refs = {
    form: document.querySelector('.feedback-form'),
    inputEmail: document.querySelector('.feedback-form input[name="email"]'),
    textarea: document.querySelector('.feedback-form textarea'),
};

populateTextarea();

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onFormInput, 500));
refs.inputEmail.addEventListener('input', throttle(onFormInput, 500));

let feedback = {
    email: '',
    message: '',  
};

function onFormSubmit(evt) {
    evt.preventDefault(); 
    feedback.email = refs.inputEmail.value;
    feedback.message = refs.textarea.value;

    if (feedback.email === '' || feedback.message === '') {
        alert('Please fill in all the fields!');
        return; 
    }

    console.log('Submitted:', feedback);
    refs.form.reset(); 
    localStorage.removeItem(STORAGE_KEY); 

}

function onFormInput(evt) {
    const email = refs.inputEmail.value;
    const message = refs.textarea.value;
    
    const data = {email, message};

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function populateTextarea() {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
        const {email, message} = JSON.parse(savedData);
        refs.inputEmail.value = email;
        refs.textarea.value = message;     
    } 
};