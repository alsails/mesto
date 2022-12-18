// отчистка ошибок в форме
function resetError(popup) {
  const inputs = [...popup.querySelectorAll('.form__input')];
  const config = {
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__error_visible'
  }
  inputs.forEach((input) => {
    hideInputError(input, config)
  });
}

const showInputError = (input, config) => {
  const error = document.querySelector(`#${input.id}-error`)
  input.classList.add(config.inputErrorClass);
  error.textContent = input.validationMessage;
  error.classList.add(config.errorClass);
};

const hideInputError = (input, config) => {
  const error = document.querySelector(`#${input.id}-error`)
  input.classList.remove(config.inputErrorClass);
  error.classList.remove(config.errorClass);
  error.textContent = '';
};

const checkInputValidation = (input, config) => {
  if (!input.validity.valid) {
    showInputError(input, config);
  } else {
    hideInputError(input, config);
  }
};

//запуск валидации
const setEventListeners = (form, config) => {
  const inputs = [...form.querySelectorAll(config.inputSelector)];
  const button = form.querySelector(config.submitButtonSelector)

  form.addEventListener('reset', () => {
    setTimeout(() => {
      toggleButton(inputs, button, config)
    }, 0);
  });

  inputs.forEach((input) => {
    input.addEventListener('input', function () {
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

function toggleButton(inputs, button, config) {
  if (hasInvalidInput(inputs)) {
  button.classList.add(config.inactiveButtonClass);
  button.disabled = 'disabled'
} else {
  button.classList.remove(config.inactiveButtonClass);
  button.disabled = ''
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
