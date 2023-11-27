import './MoviesCard.css'
import movieImage from '../../images/movieCard.jpeg'

function MoviesCard() {
  return (
    <div className='movie-card'>
      <img className='movie-card__image' alt='заставка к фильму' src={movieImage}></img>
      <div className='movie-card__info'>
        <p className='movie-card__name'>33 слова о дизайне</p>
        <button className='movie-card__saveButton'></button>
      </div>
      <p className='movie-card__length'>1ч42м</p>
    </div>
  )
}

export default MoviesCard;