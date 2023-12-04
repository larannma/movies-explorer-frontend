import './SavedMovies.css'

import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function SavedMovies() {
  return (
    <>
    <div className='content'>
      <Header headerColor={'light'}/>
      <main className='saved-movies'>
        <SearchForm/>
        <MoviesCardList/>
        {/* <Preloader/> */}
        <button className='saved-movies__moreButton' type='button'>Еще</button>
      </main>
    </div>
    <Footer/>
    </>
  )
}

export default SavedMovies