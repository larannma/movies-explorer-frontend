class MoviesApi {
    constructor(config) {
        this._url = config.url;
    }

    _handleResponse(res){
      if (res.ok){
        return res.json()
      } else {
        return Promise.reject(`Error status ${res.status}`)
      }
    }

    getMovies() {
        return(fetch(this._url)).then(this._handleResponse)
    }
}

const BEAT_MOVIES_API = 'https://api.nomoreparties.co/beatfilm-movies'

const api = new MoviesApi({
    url: BEAT_MOVIES_API,
})

export default api;