import './Movies.css'

import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
// import Preloader from '../Preloader/Preloader';

function Movies( { getMovies, moviesList } ) {
  return (
    <>
    <div className='content'>
      <Header headerColor={'light'}/>
      <main className='movies'>
        <SearchForm getMovies={getMovies}/>
        <MoviesCardList moviesList={moviesList}/>
        {/* <Preloader/> */}
        <button className='movies__moreButton' type='button'>Еще</button>
      </main>
    </div>
    <Footer/>
    </>
  )
}

export default Movies