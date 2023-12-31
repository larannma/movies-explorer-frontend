import './SavedMovies.css'

import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useEffect } from 'react'

function SavedMovies( { isLoggedIn, getMovies, savedMovies, handleMovieLike, handleSwitch, switchStatus, searchString, getSaved }) {

  useEffect(() => {
    getSaved();
  }, [])

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