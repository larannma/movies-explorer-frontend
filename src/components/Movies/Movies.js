import './Movies.css'

import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function Movies() {
  return (
    <main className='root__section movies'>
      <SearchForm/>
      <MoviesCardList/>
      <button className='movies__moreButton'>Еще</button>
    </main>
  )
}

export default Movies