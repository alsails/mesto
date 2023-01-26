export default class FormValidator {
  constructor(settings, formElement) {
    this._formElement = document.querySelector(formElement),
      this._inputSelector = settings.inputSelector,
      this._submitButtonSelector = settings.submitButtonSelector,
      this._inactiveButtonClass = settings.inactiveButtonClass,
      this._inputErrorClass = settings.inputErrorClass,
      this._errorClass = settings.errorClass,
      this._inputs = Array.from(this._formElement.querySelectorAll(settings.inputSelector));
    this._button = this._formElement.querySelector(settings.submitButtonSelector);
  }

  //сброс ошибок
  resetError () {
    this._inputs.forEach((input) => this._hideInputError(input))
    this._toggleButton()
  }
  //отображение ошибки
  _showInputError (input, validationMessage) {
    const error = this._formElement.querySelector(`#${input.id}-error`)
    input.classList.add(this._inputErrorClass);
    error.textContent = validationMessage;
    error.classList.add(this._errorClass);
  };

  //скрытие ошибки
  _hideInputError (input) {
    const error = this._formElement.querySelector(`#${input.id}-error`)
    input.classList.remove(this._inputErrorClass);
    error.classList.remove(this._errorClass);
    error.textContent = '';
  };

  //проверка валидности
  _checkInputValidation (input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  };

  //проверка на наличие не валидного input
  _hasInvalidInput(inputs) {
    return inputs.some((input) => {
      return !input.validity.valid;
    });
  }

  //активация и деактивация кнопки сохранить
  _toggleButton() {
    if (this._hasInvalidInput(this._inputs)) {
      this._button.classList.add(this._inactiveButtonClass);
      this._button.setAttribute('disabled', true);
    } else {
      this._button.classList.remove(this._inactiveButtonClass);
      this._button.removeAttribute('disabled', false);
    }
  }

  //слушатель input для проверки
  _setEventListeners = () => {
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidation(input)
        this._toggleButton()
      });
    })
  }

  //запуск валидации
  enableValidation() {
    this._setEventListeners();
  }
}
