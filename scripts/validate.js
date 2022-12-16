// отчистка ошибок в форме
function resetError(popup) {
  const inputs = [...document.querySelectorAll('.form__input')];
  const errors = [...document.querySelectorAll('.form__error')];

  inputs.forEach((input) => {
    input.classList.remove('form__input_type_erro');
  });

  errors.forEach((error) => {
    error.textContent = ''
  });
}

// проверка валидации, выводить ли сообщение об ошибке
const checkInputValidation = (input, config) => {
  const error = document.querySelector(`#${input.id}-error`)

  if (input.validity.valid) {
    error.textContent = ''
    error.classList.remove(config.errorClass);
    input.classList.remove(config.inputErrorClass);
  } else {
    error.textContent = input.validationMessage
    error.classList.add(config.errorClass);
    input.classList.add(config.inputErrorClass);
  }
}

//запуск валидации
const setEventListeners = (form, config) => {
  const inputs = [...form.querySelectorAll(config.inputSelector)];
  const button = form.querySelector(config.submitButtonSelector)
  toggleButton(inputs, button, config)

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      checkInputValidation(input, config)
      toggleButton(inputs, button, config)
    });
  });
};

// проверка всех полей на валидность
function hasInvalidInput(inputs) {
  return inputs.some((input) => {
  return !input.validity.valid;
});
}

// актировать кнопку или нет
const toggleButton = (inputs, button, config) => {
  if (hasInvalidInput(inputs)) {
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = ''
  }
  else {
    button.classList.add(config.inactiveButtonClass);
    button.disabled = 'disabled'
  }
}

// включение валидации
const enableValidation = (config) => {
  const forms = [...document.querySelectorAll(config.formSelector)];

  forms.forEach((form) => {
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(form, config);
  });
};

// объект настроек
enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__input_type_error', 
  errorClass: 'form__error_visible'
});
