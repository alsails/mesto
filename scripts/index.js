const EditButton = document.querySelector('.profile__edit-button');
const PopUp = document.querySelector(".popup");
const CloseButton = document.querySelector('.popup__close-button');

const SaveInfoProfile = document.querySelector('.form');
const NameInput = document.getElementById("name");
const DescriptionInput = document.getElementById("description");

const ProfileName = document.querySelector('.profile__name');
const ProfileDescription = document.querySelector('.profile__description');

function PopUpOpen() {
  PopUp.classList.remove('popup_hidden');

  NameInput.value = `${ProfileName.textContent}`;
  DescriptionInput.value = `${ProfileDescription.textContent}`;
};

function PopUpClose() {
  PopUp.classList.add('popup_hidden');
};

function formSubmitHandler (evt) {
  evt.preventDefault();

  ProfileName.textContent = `${NameInput.value}`;
  ProfileDescription.textContent = `${DescriptionInput.value}`;


  PopUpClose();
}

EditButton.addEventListener('click', PopUpOpen);
CloseButton.addEventListener('click', PopUpClose);

SaveInfoProfile.addEventListener('submit', formSubmitHandler);
