import './SavedMovies.css'

import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
// import { useLocalStorageState as useStorage } from '../../utils/customHooks/useLocalStorage';

function SavedMovies( { isLoggedIn, savedMovies, handleMovieLike }) {
  // const [savedMovies, setSavedMovies] = useStorage('savedMovies', []);

  return (
    <>
    <div className='content'>
      <Header headerColor={'light'} isLoggedIn={isLoggedIn}/>
      <main className='saved-movies'>
        <SearchForm/>
        <MoviesCardList displayedItems={savedMovies} handleMovieLike={handleMovieLike}/>
        {/* <Preloader/> */}
      </main>
    </div>
    <Footer/>
    </>
  )
}

export default SavedMovies