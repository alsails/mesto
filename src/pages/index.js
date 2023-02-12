import './index.css'

import Card from "../components/Card.js"
import PopupWithForm from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithConfirmation from "../components/PopupWithConfirmation.js"
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

const popupImg = new PopupWithImage(popUpPhoto)
const popupEditProfile = new PopupWithForm(popUpEditProfile, handleSubmitEditProfileForm)
const popupAddCard = new PopupWithForm(popUpAddCard, handleSubmitAddCardForm)
const popupAvatar = new PopupWithForm(popUpAvatar, handleSubmitChangeAvatar)
const popupWithConfirmation = new PopupWithConfirmation(popUpDel)
const cardList = new Section(renderCard, cardListSelector)

const validatorForPopUpEditProfile = new FormValidator(settings, popUpEditProfile)
const validatorForPopUpAddCard = new FormValidator(settings, popUpAddCard)
const validatorForPopUpChangeAvatar = new FormValidator(settings, popUpAvatar)

// //открытие popup с картинкой
const handleCardClick = (link, name) => popupImg.open(link, name)

function renderCard(data) {
  cardList.addItem(createCard(data))
}
//функция для создания нового объекта класса
const createCard = (data) => {
  const newCard = new Card(data,
    userInfo.getUserId(),
    '.сard-template',
    handleCardClick,
    {
      handelDelCard: () => {
        popupWithConfirmation.open()
        popupWithConfirmation.Submit(() => {
          popupWithConfirmation.buttonStatusData('Удаление...')
          api.delCard(data._id)
            .then((res) => {
              newCard.del()
              popupWithConfirmation.close()
            })
            .catch((err) => {
              console.log(err);
            })
        })
      },
      handelPutLike: () => {
        api.putLike(data._id)
          .then((res) => {
            newCard.putLike();
            newCard.likesCounter(res)
          })
          .catch((err) => {
            console.log(err);
          });
      },
      handelDelLike: () => {
        api.delLike(data._id)
          .then((res) => {
            newCard.delLike();
            newCard.likesCounter(res)
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })

  return newCard.generateCard();
}

//функция открытия popup редактирования профиля
function handleOpenPopupProfileEdit() {
  const profileInfo = userInfo.getUserInfo()
  nameInput.value = profileInfo.name
  descriptionInput.value = profileInfo.description
  validatorForPopUpEditProfile.resetError()
  popupEditProfile.open();
}

//функция открытия popup добавления новой карточки
function handleOpenPopupAddCard() {
  validatorForPopUpAddCard.resetError()
  popupAddCard.open();
}

function handleOpenPopupChangeAvatar() {
  validatorForPopUpChangeAvatar.resetError()
  popupAvatar.open();
}

//функция сабмита формы редактирования профиля
function handleSubmitEditProfileForm(data) {
  popupEditProfile.buttonStatusData('Сохранение...')
  api.updateUserInfo(data)
    .then((data) => {
      console.log(data)
      userInfo.setUserInfo(data)
      popupEditProfile.close()
    })
    .catch((err) => {
      console.log(err);
    });
}

//функция сабмита формы добавления новой карточки
function handleSubmitAddCardForm(data) {
  popupAddCard.buttonStatusData('Сохранение...')
  api.addNewCard(data)
    .then(res => {
      renderCard(res)
      popupAddCard.close()
    })
    .catch((err) => {
      console.log(err);
    });
}

function handleSubmitChangeAvatar(data) {
  popupAvatar.buttonStatusData('Сохранение...')
  api.updateUserAvatar(data.avatar)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupAvatar.close()
    })
    .catch((err) => {
      console.log(err);
    });
}

//слушатели для кнопок открытия popup'ов
buttonEditProfile.addEventListener('click', () => handleOpenPopupProfileEdit())
buttonAddCard.addEventListener('click', () => handleOpenPopupAddCard())
buttonChangeAvatar.addEventListener('click', () => handleOpenPopupChangeAvatar())

//добавление слушателе для popup'ов
popupImg.setEventsListeners()
popupEditProfile.setEventsListeners()
popupAddCard.setEventsListeners()
popupAvatar.setEventsListeners()
popupWithConfirmation.setEventsListeners()

//запуск валидации форм
validatorForPopUpEditProfile.enableValidation()
validatorForPopUpAddCard.enableValidation()
validatorForPopUpChangeAvatar.enableValidation()

api.getInitialCards()
  .then(res => {
    cardList.renderItems(res.reverse())
  })
  .catch((err) => {
    console.log(err);
  });

api.getUserInfo()
  .then((res) => {
    const userInformation = {
      name: res.name,
      about: res.about,
      avatar: res.avatar,
      userId: res._id
    }
    userInfo.setUserInfo(userInformation)
  })
  .catch((err) => {
    console.log(err);
  });
