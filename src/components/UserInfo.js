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
      description: this._description.textContent,
      avatar: this._imageSelector.src,
    }
  }

  //вставка в профиль
  setUserInfo(data) {
        if (data.name) this._name.textContent = data.name;
        if (data.about) this._description.textContent = data.about;
        if (data.avatar) this._imageSelector.src = data.avatar
        if (data.userId) this._userId = data.userId
  }

  getUserId() {
    return this._userId
  }
}
