class MoviesApi {
    constructor(config) {
        this._url = config.url;
    }

    getMovies() {
        return(fetch(this._url), {
            
        }).then((res) => {
            console.log(res)
        })
    }
}

const apiURL = 'https://api.nomoreparties.co/beatfilm-movies'

const api = new MoviesApi({
    url: apiURL,
})

export default api;