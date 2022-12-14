export class Card {
  constructor(data, templateSelector, handleCardPopUpOpen) {
    this._name = data.name;
    this._img = data.link;
    this._templateSelector = templateSelector;
    this._handleCardPopUpOpen = handleCardPopUpOpen;
  }

  _getTemplate() {
    const card = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return card;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._cardImg = this._element.querySelector('.card__img');
    this._cardName = this._element.querySelector('.card__name');

    this._cardImg.src = this._img;
    this._cardImg.alt = this._name;
    this._cardName.textContent = this._name;

    this._setEventListeners();
    return this._element;
  }

  _like() {
    this._likeButton.classList.toggle('card__like_active');
  }

  _del() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector('.card__like');
    this._delButton = this._element.querySelector('.card__trash');

    this._cardImg.addEventListener('click', () => {
      this._handleCardPopUpOpen(this._img, this._name);
    })

    this._likeButton.addEventListener('click', () => { this._like() });
    this._delButton.addEventListener('click', () => { this._del() });
  }
}
