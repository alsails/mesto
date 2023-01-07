import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { settings, initialCards } from "./settings.js";

// переменные для popup
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__add-button');
const popUpEditProfile = document.getElementById('profile');
const popUpAddCard = document.getElementById('card');
const popUpPhoto = document.getElementById('photo');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popups = [...document.querySelectorAll('.popup')];

// переменные для form editProfile
const profileForm = document.forms['editProfile'];
const nameInput = profileForm.querySelector('[name="name"]');
const descriptionInput = profileForm.querySelector('[name="description"]');

// переменные для form cardAdd
const cardAdd = document.forms['addCard'];
const titleInput = cardAdd.querySelector('[name="title"]');
const linkInput = cardAdd.querySelector('[name="link"]');

const popUpImg = document.querySelector('.popup__img');
const popUpImgDescription = document.querySelector('.popup__description');

const cardsListElement = document.querySelector('.cards');
// const selectorTemplate = document.querySelector('#сard-template').content.querySelector('.card');

// прорисовка card
const renderCard = (item, wrapElement) => {
  const element = createCard(item);
  wrapElement.prepend(element);
}

// создание card
function createCard(item) {
  const card = new Card(item, '.сard-template', handleCardPopUpOpen);
  const cardElement = card.generateCard();
  return cardElement;

}

//создание popup card
function handleCardPopUpOpen(img, name) {
  popUpImg.src = img;
  popUpImg.alt = name;
  popUpImgDescription.textContent = name;
  openPopUp(popUpPhoto);
}

// добавление card их массива
initialCards.forEach(function (item) {
  renderCard(item, cardsListElement);
})

// добавление карточки пользователем
const submitAddCard = (evt) => {
  evt.preventDefault();

  const card = {
    name: titleInput.value,
    link: linkInput.value
  };

  renderCard(card, cardsListElement);
  closePopUp(popUpAddCard);
}


//закрытие PopUp нажатием на Esc
const closePopUpByEscKey = (evt) => {
  if (evt.key === 'Escape') {
    closePopUp(document.querySelector('.popup_opened'))
  }
}

//закрытие PopUp
function closePopUp(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopUpByEscKey)
}

// открытие PopUp
function openPopUp(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', closePopUpByEscKey);;
};

// // сохранение новый данных профиля
function handleSubmitEditProfileForm(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  closePopUp(popUpEditProfile);
}

// слушатель для кнопки открытия PopUp редактирования профиля
buttonEditProfile.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  validatorForPopUpEditProfile.resetError();
  openPopUp(popUpEditProfile);
});

// слушатель для кнопки открытия PopUp добавления карточки
buttonAddCard.addEventListener('click', () => {
  cardAdd.reset();
  validatorForPopUpAddCard.resetError();
  openPopUp(popUpAddCard);
});

//закрытие popup нажатием на крестик и оверлей
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopUp(popup)
    }
    else if (evt.target.classList.contains('popup__close-button')) {
      closePopUp(popup)
    }
  })
})

//открытие popup создания карточки и редатирования профиля
profileForm.addEventListener('submit', handleSubmitEditProfileForm);
cardAdd.addEventListener('submit', submitAddCard);

//создание объектов для валидации popup создания карточки и редатирования профиля
const validatorForPopUpEditProfile = new FormValidator(settings, popUpEditProfile);
const validatorForPopUpAddCard = new FormValidator(settings, popUpAddCard);

//запуск валидации
validatorForPopUpEditProfile.enableValidation();
validatorForPopUpAddCard.enableValidation();

