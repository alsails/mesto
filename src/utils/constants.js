//селекторы
export const popUpEditProfile = '.popup_type_profile';
export const popUpAddCard = '.popup_type_cards';
export const popUpPhoto = '.popup_type_photos';
export const cardListSelector = '.cards';

//информация о профиле
export const profileName = '.profile__name';
export const profileDescription = '.profile__description';

//инпуты в форме редактировоания информации о профиле
export const profileForm = document.querySelector('[name="editProfile"]');
export const nameInput = profileForm.querySelector('[name="name"]');
export const descriptionInput = profileForm.querySelector('[name="description"]');

//кнопки открытия popup
export const buttonEditProfile = document.querySelector('.profile__edit-button');
export const buttonAddCard = document.querySelector('.profile__add-button');
