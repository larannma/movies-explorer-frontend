import './Movies.css'

import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Preloader from '../Preloader/Preloader';

function Movies( { isLoggedIn, getMovies, moviesList, displayedItems, isPreloaderDisplayed, loadMore, handleSwitch, switchStatus, handleMovieLike, searchString, errorMessage } ) {

  return (
    <>
    <div className='content'>
      <Header headerColor={'light'} isLoggedIn={isLoggedIn}/>
      <main className='movies'>
        <SearchForm getMovies={getMovies} handleSwitch={handleSwitch} switchStatus={switchStatus} searchString={searchString}/>
        <Preloader isPreloaderDisplayed={isPreloaderDisplayed}/>
        <MoviesCardList displayedItems={displayedItems} handleMovieLike={handleMovieLike} errorMessage={errorMessage}/>
        {!errorMessage && displayedItems.length < moviesList.length && (
          <button onClick={loadMore} className='movies__moreButton' type='button'>Еще</button>
        )}
      </main>
    </div>
    <Footer/>
    </>
  )
}

export default Movies