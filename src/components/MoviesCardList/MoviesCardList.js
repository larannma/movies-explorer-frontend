import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList( { moviesList } ) {
  return (
    <section className='movies-card-list'>
      {/* <MoviesCard name={"будущий пропс"}/> */}
      {moviesList.map(movie => {
        console.log(movie)
        return(<MoviesCard movie={movie}/>)
      }
      )}
    </section>
  )
}

export default MoviesCardList;