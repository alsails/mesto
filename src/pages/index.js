import './index.css'

import Card from "../components/Card.js"
import PopupWithForm from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js"
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'
import FormValidator from '../components/FormValidator.js'
import Api from '../components/Api.js'
import {
  popUpEditProfile,
  popUpAddCard,
  popUpPhoto,
  popUpDel,
  popUpAvatar,
  cardListSelector,
  profileName,
  profileDescription,
  profileAvatar,
  nameInput,
  descriptionInput,
  buttonEditProfile,
  buttonAddCard,
  buttonChangeAvatar
} from '../utils/constants.js'
import {
  apiConfig,
  settings
} from '../utils/settings.js'


//создание объектов классов
const api = new Api(apiConfig)

const userInfo = new UserInfo(profileName, profileDescription, profileAvatar)

api.getUserInfo().then((res) => userInfo.setUserInfo(res)
)

// const popupImg = new PopupWithImage(popUpPhoto)
// const popupEditProfile = new PopupWithForm(popUpEditProfile, handleSubmitEditProfileForm)
// const popupAddCard = new PopupWithForm(popUpAddCard, handleSubmitAddCardForm)
// const popupAvatar = new PopupWithForm(popUpAvatar, handleSubmitChangeAvatar)
// const cardList = new Section({ items: initialCards, renderer: renderCard }, cardListSelector)

// const validatorForPopUpEditProfile = new FormValidator(settings, popUpEditProfile)
// const validatorForPopUpAddCard = new FormValidator(settings, popUpAddCard)
// const validatorForPopUpChangeAvatar = new FormValidator(settings, popUpAvatar)

// api.getInitialCards()
// //открытие popup с картинкой
// const handleCardClick = (link, name) => popupImg.open(link, name)

// //функция для создания нового объекта класса
// const newCard = (item) => {
//   return new Card(item, '.сard-template', handleCardClick).generateCard()
// }

// //функция для добавления новой карточки на страницу
// function renderCard(item) {
//   cardList.addItem(newCard(item))
// }

// //функция открытия popup редактирования профиля
// function handleOpenPopupProfileEdit() {
//   const profileInfo = userInfo.getUserInfo()
//   nameInput.value = profileInfo.name
//   descriptionInput.value = profileInfo.description
//   validatorForPopUpEditProfile.resetError()
//   popupEditProfile.open();
// }

// //функция открытия popup добавления новой карточки
// function handleOpenPopupAddCard() {
//   validatorForPopUpAddCard.resetError()
//   popupAddCard.open();
// }

// function handleOpenPopupChangeAvatar() {
//   validatorForPopUpChangeAvatar.resetError()
//   popupAvatar.open();
// }

// //функция сабмита формы редактирования профиля
// function handleSubmitEditProfileForm(data) {
//   userInfo.setUserInfo(data);
//   popupEditProfile.close()
// }

// //функция сабмита формы добавления новой карточки
// function handleSubmitAddCardForm(data) {
//   renderCard(data)
//   popupAddCard.close()
// }

// function handleSubmitChangeAvatar(data) {
//   renderCard(data)
//   popupAddCard.close()
// }

// //отрисвока карточек из списка
// cardList.renderItems();

// //слушатели для кнопок открытия popup'ов
// buttonEditProfile.addEventListener('click', () => handleOpenPopupProfileEdit())
// buttonAddCard.addEventListener('click', () => handleOpenPopupAddCard())
// buttonChangeAvatar.addEventListener('click', () => handleOpenPopupChangeAvatar())

// //добавление слушателе для popup'ов
// popupImg.setEventsListeners()
// popupEditProfile.setEventsListeners()
// popupAddCard.setEventsListeners()
// popupAvatar.setEventsListeners()

// //запуск валидации форм
// validatorForPopUpEditProfile.enableValidation()
// validatorForPopUpAddCard.enableValidation()
// validatorForPopUpChangeAvatar.enableValidation()


