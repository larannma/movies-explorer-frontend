import { useState } from 'react';
import './MoviesCard.css'
import { useLocation } from 'react-router-dom'

function MoviesCard( {movie, handleMovieLike} ) {
  // const [like, setLike] = useState(movie.isLiked)

  const location = useLocation();

  function durationConvert(minutes) {
    return(`${Math.floor(minutes / 60)}ч ${minutes % 60}м`);
  }

  function handleClick(){
    // setLike(true)
    handleMovieLike(movie)
  }

  return (
    <div className='movie-card'>
      <a href={movie.trailerLink} target='_blank' rel="noreferrer"><img className='movie-card__image' alt={movie.nameRU} src={`https://api.nomoreparties.co/${movie.image.url}`}></img></a>
      <div className='movie-card__info'>
        <h2 className='movie-card__name'>{movie.nameRU}</h2>
        <button onClick={handleClick} className={`${location.pathname === '/saved-movies' ? 'movie-card__unsaveButton' : 'movie-card__saveButton'} movie-card__saveButton ${movie.isLiked ? `movie-card__savedLike` : ``}`}></button>
      </div>
      <p className='movie-card__length'>{durationConvert(movie.duration)}</p>
    </div>
  )
}

export default MoviesCard;