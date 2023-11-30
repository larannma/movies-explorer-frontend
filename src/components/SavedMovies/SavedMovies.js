import './SavedMovies.css'

import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function SavedMovies() {
  return (
    <>
    <Header headerColor={'light'}/>
    <main className='root__section-movies movies'>
      <SearchForm/>
      <MoviesCardList/>
      <button className='movies__moreButton'>Еще</button>
    </main>
    <Footer/>
    </>
  )
}

export default SavedMovies