import './SavedMovies.css'

import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function SavedMovies( { isLoggedIn, savedMovies }) {

  return (
    <>
    <div className='content'>
      <Header headerColor={'light'} isLoggedIn={isLoggedIn}/>
      <main className='saved-movies'>
        <SearchForm/>
        <MoviesCardList displayedItems={savedMovies}/>
        {/* <Preloader/> */}
      </main>
    </div>
    <Footer/>
    </>
  )
}

export default SavedMovies