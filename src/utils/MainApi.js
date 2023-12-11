const MAIN_API = 'https://api.movies.larannma.nomoredomainsmonster.ru';

const _handleResponse = (res) => {
  if (res.ok){
    return res.json()
  } else {
    return Promise.reject(`Ошибка ${res.status}`)
  }
}

export const register = (name, email, password) => {
  return fetch(`${MAIN_API}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name, email, password}),
  })
  .then(_handleResponse);
};