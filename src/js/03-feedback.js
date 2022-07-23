import throttle from 'lodash.throttle'
const formEL = document.querySelector('.feedback-form');
const STORAGGE_KEY = 'feedback-form-state';




formEL.addEventListener('submit', onFormSubmit)
formEL.addEventListener('input', throttle(onSaveStorage, 500));

getStorageInputs();

const formData ={};


function onSaveStorage(e) {
    formData[e.target.name] = e.target.value
    localStorage.setItem(STORAGGE_KEY, JSON.stringify(formData))
}

function getStorageInputs() {
    let savedData = localStorage.getItem(STORAGGE_KEY);
    if (savedData) {
      savedData = JSON.parse(savedData);
      Object.entries(savedData).forEach(([name, value]) => {
        formEL.elements[name].value = value;
      });
    }
  }

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGGE_KEY)
  }
  







