import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');

const formElements = formEl.elements;

fillFields();

formEl.addEventListener('input', throttle(inputDataForm, 500));
formEl.addEventListener('submit', formSubmit);

function fillFields() {
  const savedData = parseJson();
  if (savedData) {
    formElements.email.value = savedData.email;
    formElements.message.value = savedData.message;
  }
}

function inputDataForm() {
  let email = formElements.email.value;
  let message = formElements.message.value;
  const formData = {
    email,
    message,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function formSubmit(e) {
  e.preventDefault();
  console.log(parseJson());
  formEl.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function parseJson() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}
