export default class Card {
  constructor(data, userId, templateSelector, handleCardClick, { handelDelCard, handelPutLike, handelDelLike }) {
    this._name = data.name;
    this._img = data.link;
    this._likes = data.likes;
    this._userId = userId;
    this._card = data;
    this._id = data.id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handelDelCard = handelDelCard;
    this._handelPutLike = handelPutLike;
    this._handelDelLike = handelDelLike;
  }

  //получение темплейта
  _getTemplate() {
    const card = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return card;
  }


  //создание карточи
  generateCard() {
    this._element = this._getTemplate();
    this._delButton = this._element.querySelector('.card__trash');
    this._likeButton = this._element.querySelector('.card__like');
    this._likesData = this._card.likes
    this._isLiked()

    if (this._card.owner._id == this._userId) {
      this._delButton.classList.add('card__trash_opened')
    }

    this._cardImg = this._element.querySelector('.card__img');
    this._cardName = this._element.querySelector('.card__name');
    this._cardLikeNumber = this._element.querySelector('.card__like-number');

    this._cardImg.src = this._img;
    this._cardImg.alt = this._name;
    this._cardName.textContent = this._name;
    this._cardLikeNumber.textContent = this._likes.length;

    this._setEventListeners();
    return this._element;
  }

  likesCounter(res) {
    this._cardLikeNumber.textContent = `${res.likes.length}`;
  }


  //удаление карточки
  del() {
    this._element.remove();
    this._element = null;
  }

  _isLiked() {
    this._likesData.forEach((user) => {
      if (user._id === this._userId) {
        this.putLike();
      } else {
        this.delLike();
      }
    });
  }

  putLike() {
    this._likeButton.classList.add("card__like_active");
  }

  delLike() {
    this._likeButton.classList.remove("card__like_active");
  }

  //слушаетели
  _setEventListeners() {

    this._cardImg.addEventListener('click', () => {
      this._handleCardClick(this._img, this._name);
    })

    this._likeButton.addEventListener('click', () => {
      if (this._likeButton.classList.contains('card__like_active')) {
        this._handelDelLike();
      } else {
        this._handelPutLike();
      }
    });

    this._delButton.addEventListener('click', () => this._handelDelCard())
  }
}
