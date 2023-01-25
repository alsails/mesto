export default class UserInfo {
  constructor(nameSelector, descriptionSelector) {
    this._name = nameSelector;
    this._description = descriptionSelector;
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
  }
}
