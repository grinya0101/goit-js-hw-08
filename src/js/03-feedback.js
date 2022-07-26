import throttle from 'lodash.throttle'
const formEL = document.querySelector('.feedback-form');
const STORAGGE_KEY = 'feedback-form-state';




formEL.addEventListener('submit', onFormSubmit)
formEL.addEventListener('input', throttle(onSaveStorage, 500));

const formData = {};
getStorageInputs();

function onSaveStorage(e) {
  let savedInputs = localStorage.getItem(STORAGGE_KEY);
  // savedInputs = savedInputs ? JSON.parse(savedInputs) : {};
  if(savedInputs){
    savedInputs = JSON.parse(savedInputs)
  } else{
    savedInputs = {}
  }
  savedInputs[e.target.name] = e.target.value;
  localStorage.setItem(STORAGGE_KEY, JSON.stringify(savedInputs));
}

function getStorageInputs() {
    let savedData = localStorage.getItem(STORAGGE_KEY);
    
    if (savedData) {
      savedData = JSON.parse(savedData);
      Object.entries(savedData).forEach(([name, value]) => {
        formEL.elements[name].value = value;
        console.log(formData)
      });
    }
  }

function onFormSubmit(evt) {
  
  evt.preventDefault();

  /*Для Вывода обьекта в консоль */
  const formData = new FormData(formEL);
  const userData = {};
  formData.forEach((value, name) => userData[name] = value);
  console.log(userData);
  /*Проверка на заполнение всех полей */
  const { email, message } = evt.target.elements;
  if (email.value === "" || message.value === "") {
   return
  }
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGGE_KEY);
  }
  

  
