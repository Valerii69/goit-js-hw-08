import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const feedBackFormState = 'feedback-form-state';

let formValues = JSON.parse(localStorage.getItem(feedBackFormState));

const { email, message } = form.elements;
const saveInLocalStorage = throttle(event => {
  formValues = { email: email.value, message: message.value };

  localStorage.setItem(feedBackFormState, JSON.stringify(formValues));
}, 500);

if (formValues) {
  email.value = formValues.email;
  message.value = formValues.message;
}

function onSubmit(evt) {
  evt.preventDefault();
  localStorage.clear();

  if (email.value === '' || message.value === '') {
    return;
  }

  console.log(formValues);
  evt.currentTarget.reset();
}

form.addEventListener('input', saveInLocalStorage);
form.addEventListener('submit', onSubmit);
