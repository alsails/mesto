export default class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'GET',
      headers: this.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: this.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
  }

  updateUserInfo(data) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      body: JSON.stringify({
        avatar: data
      }),
      headers: this.headers
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(data => console.log(data))
  }
}

