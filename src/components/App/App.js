import React from 'react';
import { useState, useEffect } from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import './App.css'
import Register from '../Register/Register'
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import SavadMovies from '../SavedMovies/SavedMovies';
import api from '../../utils/MoviesApi';
import useScreenWidth from '../../utils/customHooks/useScreenWidth';


function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [itemsPreload, setItemsPreload] = useState(16);
  const [isPreloaderDisplayed, setPreloaderDisplayed] = useState(false);
  const [displayedItems, setDisplayedItems] = useState(moviesList.slice(0, itemsPreload));
  const windowWidth = useScreenWidth();
  const [initialPreload, setInitialPreload] = useState(16);

  useEffect(() => {
    if (windowWidth >= 1280) {
      setInitialPreload(16);
      setItemsPreload(16)
    } else if (windowWidth >= 768 && windowWidth < 1280) {
      setInitialPreload(12);
      setItemsPreload(12)
    } else {
      setInitialPreload(5);
      setItemsPreload(2);
    }
  }, [windowWidth]);

  function sortMovies(arr, searchString) {
    return arr.filter(obj => {
      return (obj.nameEN && obj.nameEN.toLowerCase().includes(searchString.toLowerCase())) || 
             (obj.nameRU && obj.nameRU.toLowerCase().includes(searchString.toLowerCase()));
  });
  }

  function getMovies(searchString) {
    setPreloaderDisplayed(true)
    api.getMovies().then((res) => {
      let newArr = sortMovies(res, searchString)
      setDisplayedItems(newArr.slice(0, initialPreload))
      setMoviesList(newArr);
    }).finally(() => {
      setPreloaderDisplayed(false)
    })
    
  }

  function loadMore() {
    const nextItems = moviesList.slice(
      displayedItems.length,
      displayedItems.length + itemsPreload
    )
    setDisplayedItems(prevItems => [...prevItems, ...nextItems])
  }

  return (
    <div className="App root">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/movies' element={<Movies getMovies={getMovies} moviesList={moviesList} displayedItems={displayedItems} isPreloaderDisplayed={isPreloaderDisplayed} loadMore={loadMore}/>}/>
        <Route path='/saved-movies' element={<SavadMovies/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
