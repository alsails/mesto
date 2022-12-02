// переменные для popup
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popUpProfile = document.getElementById('profile');
const popUpAdd = document.getElementById('card');
const popUpPhoto = document.getElementById('photo');
const closeButton = document.querySelectorAll('.popup__close-button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

// переменные для form editProfile
const saveInfoProfile = document.querySelector('[name="editProfile"]');
const nameInput = saveInfoProfile.querySelector('[name="name"]');
const descriptionInput = saveInfoProfile.querySelector('[name="description"]');

// переменные для form addCard
const addCard = document.querySelector('[name="addCard"]');
const titleInput = addCard.querySelector('[name="title"]');
const linkInput = addCard.querySelector('[name="link"]');
const formInpute = document.querySelector('.form__input');

const popUpImg = document.querySelector('.popup__img');
const popUpImgDescription = document.querySelector('.popup__description');

// переменные для Template
const cardsListElement = document.querySelector('.cards');
const cardTemplate = document.querySelector('#сard-template').content.querySelector('.card');

// массив для cards
const initialCards = [
  {
    name: 'Бразилия',
    link: '../images/brazil.jpg'
  },
  {
    name: 'Чехия',
    link: '../images/czech.jpg'
  },
  {
    name: 'Япония',
    link: '../images/japan.jpg'
  },
  {
    name: 'Финляндия',
    link: '../images/finland.jpg'
  },
  {
    name: 'Швейцария',
    link: '../images/Switzerland.jpg'
  },
  {
    name: 'Тайланд',
    link: '../images/thailland.jpg'
  }
];


closeButton.forEach(evt => {
  evt.addEventListener('click', () => evt.closest('.popup').classList.remove('popup_opened'));
})


// открытие PopUp
function openPopUp(popup) {
  if (popup === popUpProfile) {
    nameInput.value = `${profileName.textContent}`;
    descriptionInput.value = `${profileDescription.textContent}`;
  }

  popup.classList.add('popup_opened');
};



// сохранение новый данных профиля
function submitProfileInfo(evt) {
  evt.preventDefault();

  profileName.textContent = `${nameInput.value}`;
  profileDescription.textContent = `${descriptionInput.value}`;

  popUpProfile.classList.remove('popup_opened');
}


// создание cards из массива
function createCards(item) {
  const card = cardTemplate.cloneNode(true);
  const likeButton = card.querySelector('.card__like');
  const DelButton = card.querySelector('.card__trash');
  const cardName = card.querySelector('.card__name');
  const cardImg = card.querySelector('.card__img');

  cardImg.src = item.link;
  cardName.textContent = item.name;
  cardImg.alt = item.name;

  likeButton.addEventListener('click', clickCardLike);
  DelButton.addEventListener('click', clickCardDel);

  cardImg.addEventListener('click', renderPopUpPhoto);

  return card;
}

const renderPopUpPhoto = (evt) => {

  openPopUp(popUpPhoto);
  popUpImg.src = evt.target.src;
  popUpImgDescription.textContent =  evt.target.alt;
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
  const element = createCards(item);
  wrapElement.prepend(element);
}

// добавление card на страницу
initialCards.forEach(function (item) {
  renderCard(item, cardsListElement);
})

// добавление карточки пользователем
const submitAddCard = (evt) => {
  evt.preventDefault();
  console.log(titleInput.value)
  const card = {
    name: titleInput.value,
    link: linkInput.value
  };

  renderCard(card, cardsListElement);

  popUpAdd.classList.remove('popup_opened');

  titleInput.value = "";
  linkInput.value = "";
}


// cardPhoto.forEach(evt => {
//   evt.addEventListener('click', () => console.log(evt));
// })












editButton.addEventListener('click', () => openPopUp(popUpProfile));
addButton.addEventListener('click', () => openPopUp(popUpAdd));

saveInfoProfile.addEventListener('submit', submitProfileInfo);
addCard.addEventListener('submit', submitAddCard);

//  cardPhoto.forEach(() => openPopUp(popUpPhoto));


// const food = ['🍔', '🍟', '🍦']

// cardPhoto.addEventListener('click', () => openPopUp(popUpPhoto));

// cardPhoto.addEventListener('click', clickCardPhoto);

// const clickCardPhoto = (evt) => {
//   console.log(evt.target);
// }

// cardPhoto.forEach(evt => {
//   evt.addEventListener('click', () => openPopUp(popUpPhoto));
// })

// console.log(cardPhotos)
// console.log(document.querySelector('.page'));
