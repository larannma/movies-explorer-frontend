import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList( { displayedItems, handleMovieLike } ) {
  return (
    <section className='movies-card-list'>
      {displayedItems && displayedItems.map(movie => {
        return(<MoviesCard key={movie.id} movie={movie} handleMovieLike={handleMovieLike}/>)
      }
      )}
    </section>
  )
}

export default MoviesCardList;