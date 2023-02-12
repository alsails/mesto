import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(selectorPopup, handleSubmitForm) {
    super(selectorPopup);
    this._handleSubmitForm = handleSubmitForm;
    this._form = this._popup.querySelector('.form');
    this._inputs = [...this._popup.querySelectorAll('.form__input')];
  }

  //получение значение из input
  _getInputValues() {
    this._inputsValues = {};
    this._inputs.forEach(input => {
      this._inputsValues[input.name] = input.value;
    })
    return this._inputsValues
  }

  setInputValues(data) {
    this._inputsValues = {};
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    });
  }

  //слушатель для сабмита формы
  setEventsListeners() {
    super.setEventsListeners()
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._handleSubmitForm(this._getInputValues())
    })
  }

  //закрытие popup и отчистка формы
  close() {
    super.close();
    this._form.reset();
  }
}
