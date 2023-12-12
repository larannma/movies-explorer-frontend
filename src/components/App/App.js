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
import { useLocalStorageState as useStorage } from '../../utils/customHooks/useLocalStorage';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as MainApi from '../../utils/MainApi';

function App() {
  const [moviesList, setMoviesList] = useStorage('moviesList', []);
  const [itemsPreload, setItemsPreload] = useState(16);
  const [isPreloaderDisplayed, setPreloaderDisplayed] = useState(false);
  const [displayedItems, setDisplayedItems] = useStorage('displayedItems', moviesList.slice(0, itemsPreload));
  const windowWidth = useScreenWidth();
  const [initialPreload, setInitialPreload] = useState(16);
  const [switchStatus, setSwitchStatus] = useStorage('switch', false);
  const [isLoggedIn, setLoggedIn] = useStorage('isLoggedIn', false);
  const [currentUser, setCurrentUser] = React.useState({});

  const navigate = useNavigate();

  React.useEffect(() => {
    MainApi.getUserInfo().then((res) => {
      console.log(res)
      setCurrentUser(res);
    }).catch((err => {
      console.log(err)
    }));
  }, []);

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
    }).finally(() => {
      setPreloaderDisplayed(false)
    })
    
  }

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
    setLoggedIn(true);
    navigate("/movies", {replace: true});
  }

  const handleUpdateUser = (data) => {
    console.log(data);
    MainApi.editUserInfo(data.name, data.email).then((res) => {
      console.log(res)
      setCurrentUser(res);
    }).catch((err => {
      console.log(err)
    }));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App root">
        <Routes>
          <Route path='/' element={<Main isLoggedIn={isLoggedIn}/>}/>
          <Route path='/signin' element={<Login handleLogin={handleLogin}/>}/>
          <Route path='/signup' element={<Register handleRegistration={handleRegistration}/>}/>
          <Route path='/movies' element={<ProtectedRouteElement element={Movies} isLoggedIn={isLoggedIn} getMovies={getMovies} moviesList={moviesList} displayedItems={displayedItems} isPreloaderDisplayed={isPreloaderDisplayed} loadMore={loadMore} handleSwitch={handleSwitch} switchStatus={switchStatus}/>}/>
          <Route path='/saved-movies' element={<ProtectedRouteElement element={SavedMovies} isLoggedIn={isLoggedIn} displayedItems={displayedItems}/>}/>
          <Route path='/profile' element={<ProtectedRouteElement element={Profile} isLoggedIn={isLoggedIn} handleUpdateUser={handleUpdateUser}/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
