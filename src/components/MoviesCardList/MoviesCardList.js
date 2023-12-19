import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList( { displayedItems, handleMovieLike, errorMessage } ) {
  return (
    <section className='movies-card-list'>
      {!errorMessage && displayedItems && displayedItems.map(movie => {
        return(<MoviesCard key={movie.id ? movie.id : movie._id} movie={movie} handleMovieLike={handleMovieLike}/>)
      }
      )}
      <h2 className={`movies-card-list__error ${errorMessage ? `` : `movies-card-list__error_no-display`}`}>{errorMessage}</h2>
    </section>
  )
}

export default MoviesCardList;