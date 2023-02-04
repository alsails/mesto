export default class UserInfo {
  constructor(nameSelector, descriptionSelector, imageSelector) {
    this._name = document.querySelector(nameSelector);
    this._description = document.querySelector(descriptionSelector);
    this._imageSelector = document.querySelector(imageSelector);
  }

  //получение информации из профиля
  getUserInfo() {
    return {
      name: this._name.textContent,
      description: this._description.textContent
    }
  }

  //вставка в профиль
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._description.textContent = data.description;
    this._imageSelector.src = data.avatar
  }
}
