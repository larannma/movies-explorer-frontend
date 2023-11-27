import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function Movies() {
  return (
    <main className='root__section movies'>
      <SearchForm/>
      <MoviesCardList/>
    </main>
  )
}

export default Movies