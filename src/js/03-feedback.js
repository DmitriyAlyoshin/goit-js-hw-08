// import throttle from 'lodash.throttle';

// let form = document.querySelector('.feedback-form');
// let formValues = {
//   email: form.email.value,
//   message: form.message.value,
// };

// let STORAGE_KEY = 'feedback-form-state';

// addLocalData();

// form.addEventListener('input', throttle(onFormInput, 500));
// form.addEventListener('submit', onFormSubmit);

// function onFormInput({ target: { name, value } }) {
//   formValues[name] = value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formValues));
// }

// function onFormSubmit(event) {
//   event.preventDefault();

//   let submittedData = {
//     email: event.currentTarget.email.value,
//     message: event.currentTarget.message.value,
//   };

//   if (submittedData.email === '' || submittedData.message === '') {
//     alert('All fields must be filled!!!');
//     return;
//   }

//   console.log(submittedData);

//   localStorage.removeItem(STORAGE_KEY);
//   form.reset();
// }

// function addLocalData() {
//   let localData = JSON.parse(localStorage.getItem(STORAGE_KEY));

//   if (!localData) return;

//   if (localData.email) form.email.value = localData.email;
//   if (localData.message) form.message.value = localData.message;
// }


import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

form.addEventListener('input', throttle(onFillForm, 500));
form.addEventListener('submit', onSubmitForm);

const formData = {};
const LOCALSTORAGE_KEYS = 'feedback-form-state';

function onFillForm(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('LOCALSTORAGE_KEYS', JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('LOCALSTORAGE_KEYS')));
  e.currentTarget.reset();
  localStorage.removeItem('LOCALSTORAGE_KEYS');
}

savedData();

function savedData() {
  const data = JSON.parse(localStorage.getItem('LOCALSTORAGE_KEYS'));
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
}
