import throttle from 'lodash/throttle';

let form = document.querySelector('.feedback-form');

let localKey = 'feedback-form-state';

addLocalData();

const formValues = {
  email: form.email.value,
  message: form.message.value,
};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput({ target: { name, value } }) {
  formValues[name] = value;
  localStorage.setItem(localKey, JSON.stringify(formValues));
}

function onFormSubmit(event) {
  event.preventDefault();

  const submittedData = {
    email: event.currentTarget.email.value,
    message: event.currentTarget.message.value,
  };

  if (submittedData.email === '' || submittedData.message === '') {
    alert('Please fill all fields!');
    return;
  }

  console.log(submittedData);

  localStorage.removeItem(LOCAL_KEY);
  form.reset();
}

function addLocalData() {
  const localData = JSON.parse(localStorage.getItem(LOCAL_KEY));

  if (!localData) return;

  if (localData.email) form.email.value = localData.email;
  if (localData.message) form.message.value = localData.message;
}
