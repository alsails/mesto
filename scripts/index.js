// переменные для popup
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__add-button');
const popUpEditProfile = document.getElementById('profile');
const popUpAddCard = document.getElementById('card');
const popUpPhoto = document.getElementById('photo');
const buttonsClose = document.querySelectorAll('.popup__close-button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

// переменные для form editProfile
const saveInfoProfile = document.querySelector('[name="editProfile"]');
const nameInput = saveInfoProfile.querySelector('[name="name"]');
const descriptionInput = saveInfoProfile.querySelector('[name="description"]');

// переменные для form cardAdd
const cardAdd = document.querySelector('[name="addCard"]');
const titleInput = cardAdd.querySelector('[name="title"]');
const linkInput = cardAdd.querySelector('[name="link"]');
const formInpute = document.querySelector('.form__input');

const popUpImg = document.querySelector('.popup__img');
const popUpImgDescription = document.querySelector('.popup__description');

// переменные для Template
const cardsListElement = document.querySelector('.cards');
const cardTemplate = document.querySelector('#сard-template').content.querySelector('.card');

function closePopUp(popup) {
  popup.classList.remove('popup_opened');
}

// открытие PopUp
function openPopUp(popup) {
  popup.classList.add('popup_opened');
};

// сохранение новый данных профиля
function handleSubmitEditProfileForm(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  closePopUp(popUpEditProfile);
}

// создание cards из массива
function createCard(item) {
  const card = cardTemplate.cloneNode(true);
  const buttonLike = card.querySelector('.card__like');
  const buttonDel = card.querySelector('.card__trash');
  const cardName = card.querySelector('.card__name');
  const cardImg = card.querySelector('.card__img');

  cardImg.src = item.link;
  cardName.textContent = item.name;
  cardImg.alt = item.name;

  buttonLike.addEventListener('click', clickCardLike);
  buttonDel.addEventListener('click', clickCardDel);

  // cardImg.addEventListener('click', renderPopUpPhoto);
  cardImg.addEventListener('click', () => {
    popUpImg.src = evt.target.src;
    popUpImg.alt = evt.target.alt;
    popUpImgDescription.textContent = evt.target.alt;
    openPopUp(popUpPhoto);
  });

  return card;
}

const openCardPhoto = (evt) => {
  evt.target.classList.toggle('card__like_active');
}
// лайк карточки
const clickCardLike = (evt) => {
  evt.target.classList.toggle('card__like_active');
}
// удаление карточки
const clickCardDel = (evt) => {
  evt.target.closest('.card').remove();
}

// прорисовка card
const renderCard = (item, wrapElement) => {
  const element = createCard(item);
  wrapElement.prepend(element);
}

// добавление card на страницу
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

  cardAdd.reset();
}

buttonEditProfile.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  openPopUp(popUpEditProfile);
});
buttonAddCard.addEventListener('click', () => openPopUp(popUpAddCard));
buttonsClose.forEach(evt => {
  evt.addEventListener('click', () => closePopUp(evt.closest('.popup')));
})

saveInfoProfile.addEventListener('submit', handleSubmitEditProfileForm);
cardAdd.addEventListener('submit', submitAddCard);
