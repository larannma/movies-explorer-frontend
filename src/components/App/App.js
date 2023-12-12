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
import SavedMovies from '../SavedMovies/SavedMovies';
import api from '../../utils/MoviesApi';
import useScreenWidth from '../../utils/customHooks/useScreenWidth';
import ProtectedRouteElement from '../../utils/ProtectedRoute';
import { useNavigate } from 'react-router-dom';

// import CustomSwitch from '../CustomSwitch/CustomSwitch';


function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [itemsPreload, setItemsPreload] = useState(16);
  const [isPreloaderDisplayed, setPreloaderDisplayed] = useState(false);
  const [displayedItems, setDisplayedItems] = useState(moviesList.slice(0, itemsPreload));
  const windowWidth = useScreenWidth();
  const [initialPreload, setInitialPreload] = useState(16);
  const [switchStatus, setSwitchStatus] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();


  useEffect(() => {
    let localMoviesList = JSON.parse(localStorage.getItem('movieList'));
    let localDisplayedItems = JSON.parse(localStorage.getItem('displayedMovies'));
    let localSwitchStatus = JSON.parse(localStorage.getItem('switch'));

    if (localDisplayedItems && localMoviesList) {
      setMoviesList(localMoviesList);
      setDisplayedItems(localDisplayedItems);
      setSwitchStatus(localSwitchStatus);
    }
  }, [])

  React.useEffect(() => {
    tokenCheck();
  }, [isLoggedIn]);

  const tokenCheck = () => {
    const token = localStorage.getItem('isLoggedIn');
    if (token){
      setLoggedIn(true);
      navigate("/movies", {replace: true});
    }
  }

  useEffect(() => {
    if (windowWidth >= 1280) {
      setInitialPreload(16);
      setItemsPreload(4)
    } else if (windowWidth >= 768 && windowWidth < 1280) {
      setInitialPreload(12);
      setItemsPreload(3)
    } else {
      setInitialPreload(5);
      setItemsPreload(2);
    }
  }, [windowWidth]);

  function sortMovies(arr, searchString) {
    return arr.filter(obj => {
      const hasMatchingTitle = (obj.nameEN && obj.nameEN.toLowerCase().includes(searchString.toLowerCase())) ||
                            (obj.nameRU && obj.nameRU.toLowerCase().includes(searchString.toLowerCase()));

      if (switchStatus) {
        return hasMatchingTitle && obj.duration && obj.duration < 30;
      } else {
        return hasMatchingTitle;
      }
  });
  }

  function getMovies(searchString) {
    setPreloaderDisplayed(true)
    
    api.getMovies().then((res) => {
      let newArr = sortMovies(res, searchString);
      setDisplayedItems(newArr.slice(0, initialPreload));
      setMoviesList(newArr);
      localStorage.setItem('searchString', searchString);
      localStorage.setItem('switch', switchStatus);
      localStorage.setItem('movieList', JSON.stringify(newArr));
      localStorage.setItem('displayedMovies', JSON.stringify(newArr.slice(0, initialPreload)));
    }).finally(() => {
      setPreloaderDisplayed(false)
    })
    
  }

  useEffect(() => {
    localStorage.setItem('displayedMovies', JSON.stringify(displayedItems));
  }, [displayedItems])

  function loadMore() {
    const nextItems = moviesList.slice(
      displayedItems.length,
      displayedItems.length + itemsPreload
    )
    setDisplayedItems(prevItems => [...prevItems, ...nextItems]);
  }

  function handleSwitch(status){
    setSwitchStatus(status);
  }

  function handleRegistration(result) {
    console.log(result);
  }

  function handleLogin(result) {
    console.log(result);
    // localStorage.setItem('isLoggedIn', true);
    setLoggedIn(true);
    navigate("/movies", {replace: true});
  }

  return (
    <div className="App root">
      <Routes>
        <Route path='/' element={<Main isLoggedIn={isLoggedIn}/>}/>
        <Route path='/signin' element={<Login handleLogin={handleLogin}/>}/>
        <Route path='/signup' element={<Register handleRegistration={handleRegistration}/>}/>
        <Route path='/movies' element={<ProtectedRouteElement element={Movies} isLoggedIn={isLoggedIn} getMovies={getMovies} moviesList={moviesList} displayedItems={displayedItems} isPreloaderDisplayed={isPreloaderDisplayed} loadMore={loadMore} handleSwitch={handleSwitch} switchStatus={switchStatus}/>}/>
        <Route path='/saved-movies' element={<ProtectedRouteElement element={SavedMovies} isLoggedIn={isLoggedIn} displayedItems={displayedItems}/>}/>
        <Route path='/profile' element={<ProtectedRouteElement element={Profile} isLoggedIn={isLoggedIn}/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
