import './SavedMovies.css'

import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function SavedMovies( { isLoggedIn, getMovies, savedMovies, handleMovieLike, handleSwitch, switchStatus, searchString }) {

  return (
    <>
    <div className='content'>
      <Header headerColor={'light'} isLoggedIn={isLoggedIn}/>
      <main className='saved-movies'>
        <SearchForm getMovies={getMovies} handleSwitch={handleSwitch} switchStatus={switchStatus} searchString={searchString}/>
        <MoviesCardList displayedItems={savedMovies} handleMovieLike={handleMovieLike}/>
        {/* <Preloader/> */}
      </main>
    </div>
    <Footer/>
    </>
  )
}

export default SavedMovies