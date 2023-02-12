import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup)
    this._popup = document.querySelector(selectorPopup)
    this._form = this._popup.querySelector(".form");
  }

  setSubmit(callback) {
    this._handleSubmitDelCard = callback;
  }

    //слушатель для сабмита формы
  setEventsListeners() {
    super.setEventsListeners()
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._handleSubmitDelCard();
    })
  }
}
