export class Card {
  constructor(data, handleCardPopUpOpen) {
    this._name = data.name;
    this._img = data.link;
    this._handleCardPopUpOpen = handleCardPopUpOpen;
  }
  //template
  _getTemplate() {
    const card =  document.querySelector('#сard-template').content.querySelector('.card').cloneNode(true);
    return card
  }

  //рендер карточек
  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.card__img').src = this._img;
    this._element.querySelector('.card__img').alt = this._name;
    this._element.querySelector('.card__name').textContent = this._name;

    this._setEventListeners();
    return this._element;
  }

  //лайк
  _like(button) {
    button.classList.toggle('card__like_active');
  }

  //удаление
  _del(button) {
    button.closest('.card').remove()
  }

  _setEventListeners() {
    const cardAdd = document.forms['addCard'];

    this._element.querySelector('.card__img').addEventListener('click', () => {
      this._handleCardPopUpOpen();
    });

    this._element.querySelector('.card__like').addEventListener('click', () => {this._like(this._element.querySelector('.card__like'))});
    this._element.querySelector('.card__trash').addEventListener('click', () => {this._del(this._element.querySelector('.card__trash'))});
  }

}
