import './MoviesCard.css'
import movieImage from '../../images/movieCard.jpeg'

function MoviesCard( {name} ) {
  return (
    <div className='movie-card'>
      <img className='movie-card__image' alt={name} src={movieImage}></img>
      <div className='movie-card__info'>
        <h2 className='movie-card__name'>33 слова о дизайне</h2>
        <button className='movie-card__saveButton'></button>
      </div>
      <p className='movie-card__length'>1ч42м</p>
    </div>
  )
}

export default MoviesCard;