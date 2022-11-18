const editButton = document.querySelector('.profile__edit-button');
const popUp = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');

const saveInfoProfile = document.querySelector('.form');
const nameInput = document.querySelector('.form__input-name');
const descriptionInput = document.querySelector('.form__input-description');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

function openPopUp() {
  popUp.classList.add('popup_opened');

  nameInput.value = `${profileName.textContent}`;
  descriptionInput.value = `${profileDescription.textContent}`;
};

function closePopUp() {
  popUp.classList.remove('popup_opened');
};

function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = `${nameInput.value}`;
  profileDescription.textContent = `${descriptionInput.value}`;


  closePopUp();
}

editButton.addEventListener('click', openPopUp);
closeButton.addEventListener('click', closePopUp);

saveInfoProfile.addEventListener('submit', formSubmitHandler);
