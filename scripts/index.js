// переменные для popup
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popUpProfile = document.getElementById('profile');
const popUpAdd = document.getElementById('card');
const closeButtonProfile = document.querySelector('#profile-close');
const closeButtonAdd = document.querySelector('#card-close');
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


// открытие PopUpProfile
function openPopUpProfile() {
  popUpProfile.classList.add('popup_opened');

  nameInput.value = `${profileName.textContent}`;
  descriptionInput.value = `${profileDescription.textContent}`;
};

// открытие PopUpAdd
function openPopUpAdd() {
  popUpAdd.classList.add('popup_opened');

  titleInput.value = "";
  linkInput.value = "";
};

// закрытие PopUp
function closePopUpProfile() {
  popUpProfile.classList.remove('popup_opened');
};

function closePopUpAdd() {
  popUpAdd.classList.remove('popup_opened');
};

// сохранение новый данных профиля
function submitProfileInfo(evt) {
  evt.preventDefault();

  profileName.textContent = `${nameInput.value}`;
  profileDescription.textContent = `${descriptionInput.value}`;


  closePopUpProfile();
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

  return card;
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

  const card = {
    name: titleInput.value,
    link: linkInput.value
  };

  renderCard(card, cardsListElement);
  closePopUpAdd();
}

editButton.addEventListener('click', openPopUpProfile);
addButton.addEventListener('click', openPopUpAdd);
closeButtonProfile.addEventListener('click', closePopUpProfile);
closeButtonAdd.addEventListener('click', closePopUpAdd);

saveInfoProfile.addEventListener('submit', submitProfileInfo);
addCard.addEventListener('submit', submitAddCard);

