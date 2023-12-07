import './MoviesCard.css'

function MoviesCard( {movie} ) {

  function durationConvert(minutes) {
    return(`${Math.floor(minutes / 60)}ч ${minutes % 60}м`);
  }

  return (
    <div className='movie-card'>
      <a href={movie.trailerLink} target='_blank' rel="noreferrer"><img className='movie-card__image' alt={movie.nameRU} src={`https://api.nomoreparties.co/${movie.image.url}`}></img></a>
      <div className='movie-card__info'>
        <h2 className='movie-card__name'>{movie.nameRU}</h2>
        <button className='movie-card__saveButton'></button>
      </div>
      <p className='movie-card__length'>{durationConvert(movie.duration)}</p>
    </div>
  )
}

export default MoviesCard;