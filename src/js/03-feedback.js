import throttle from 'lodash/throttle';

let form = document.querySelector('.feedback-form');

let STORAGE_KEY = 'feedback-form-state';

addLocalData();

let formValues = {
  email: form.email.value,
  message: form.message.value,
};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput({ target: { name, value } }) {
  formValues[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formValues));
}

function onFormSubmit(event) {
  event.preventDefault();

  let submittedData = {
    email: event.currentTarget.email.value,
    message: event.currentTarget.message.value,
  };

  if (submittedData.email === '' || submittedData.message === '') {
    alert('Please fill all fields!');
    return;
  }

  console.log(submittedData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

function addLocalData() {
  let localData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (!localData) return;

  if (localData.email) form.email.value = localData.email;
  if (localData.message) form.message.value = localData.message;
}
