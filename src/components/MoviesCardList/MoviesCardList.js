import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList( { displayedItems } ) {
  return (
    <section className='movies-card-list'>
      {displayedItems.map(movie => {
        return(<MoviesCard key={movie.id} movie={movie}/>)
      }
      )}
    </section>
  )
}

export default MoviesCardList;