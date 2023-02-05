export default class Section {
  constructor({renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector)
  }

  //добавление карточки на страницу
  addItem(element) {
    this._container.prepend(element);
  }

  //открисовка карточки
  renderItems(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  }
}
