export default class Api {
  constructor({baseUrl, headers}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers.authorization
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        console.log(data)
      })
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers
    })
      .then(res =>
           res.json())
      .then(data => {
        const userinfo = {
          name: data.name,
          description: data.about,
          avatar: data.avatar
        }
        return userinfo
      })
  }
}

