import brazil from '../../images/brazil.jpg';
import czech from '../../images/czech.jpg';
import japan from '../../images/japan.jpg';
import finland from '../../images/finland.jpg';
import switzerland from '../../images/Switzerland.jpg';
import thailland from '../../images/thailland.jpg';



export const initialCards = [
  {
    name: 'Бразилия',
    link: brazil
  },
  {
    name: 'Чехия',
    link: czech
  },
  {
    name: 'Япония',
    link: japan
  },
  {
    name: 'Финляндия',
    link: finland
  },
  {
    name: 'Швейцария',
    link: switzerland
  },
  {
    name: 'Тайланд',
    link: thailland
  }
];

export const settings = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
};
