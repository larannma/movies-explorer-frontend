// const MAIN_API = 'https://api.movies.larannma.nomoredomainsmonster.ru';
const MAIN_API = 'http://localhost:3001';

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
  .then(_handleResponse)
  .catch((err) => {
    console.log(`Ошибка регистрации: ${err}`)
  });
};

export const authorize = (email, password) => {
  return fetch(`${MAIN_API}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password}),
  })
  .then(_handleResponse)
};

export const editUserInfo = (name, email) => {
    return fetch(`${MAIN_API}/users/me`, {
    method: "PATCH",
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
    })
  })
  .then(_handleResponse);
}

export const getUserInfo = () => {
  return fetch(`${MAIN_API}/users/me`, {
  method: "GET",
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})
.then(_handleResponse)
.catch(err => {
  console.log(err)
});
}

export const getSavedMovies = () => {
  return fetch(`${MAIN_API}/movies`, {
  method: "GET",
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})
.then(_handleResponse);
}

export const createMovie = (country, director, duration, year, description, image, trailerLink, thumbnail, movieId, nameRU, nameEN) => {
  return fetch(`${MAIN_API}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      movieId,
      nameRU,
      nameEN
    
    }),
  })
  .then(_handleResponse)
  .catch((err) => {
    console.log(`Ошибка создания карточки: ${err}`)
  });
};

export const deleteMovie = (movieId) => {
  return fetch(`${MAIN_API}/movies/${movieId}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then(_handleResponse)
  .catch((err) => {
    console.log(`Ошибка удаления карточки: ${err}`)
  });
};