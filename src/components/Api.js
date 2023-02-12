export default class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'GET',
      headers: this.headers
    })
    .then(this._checkResponse)
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: this.headers
    })
    .then(this._checkResponse)
  }

  updateUserAvatar(data) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      body: JSON.stringify({
        avatar: data
      }),
      headers: this.headers
    })
    .then(this._checkResponse)
  }

  updateUserInfo(data) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      body: JSON.stringify({
        name: data.name,
        about: data.description
      }),
      headers: this.headers
    })
    .then(this._checkResponse)
  }

  addNewCard(data) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      body: JSON.stringify({
        name: data.name,
        link: data.link
      }),
      headers: this.headers
    })
    .then(this._checkResponse)
  }

  delCard(data) {
    return fetch(`${this.baseUrl}/cards/${data}`, {
      method: 'DELETE',
      headers: this.headers
    })
    .then(this._checkResponse)
  }

  delLike(data) {
    return fetch(`${this.baseUrl}/cards/${data}/likes`, {
      method: 'DELETE',
      headers: this.headers
    })
    .then(this._checkResponse)
  }

  putLike(data) {
    return fetch(`${this.baseUrl}/cards/${data}/likes`, {
      method: 'PUT',
      headers: this.headers
    })
    .then(this._checkResponse)
  }
}

