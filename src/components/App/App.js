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
import {  sortMovies, 
          addIsLikedToMovies,
          isMovieSaved,
          findById,
        } from '../../utils/sortingMovies';

function App() {
  // для пользователя
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setLoggedIn] = useStorage('isLoggedIn', false);

  // на разок
  const windowWidth = useScreenWidth();
  const [itemsPreload, setItemsPreload] = useState(16);
  const [initialPreload, setInitialPreload] = useState(16);
  const [isPreloaderDisplayed, setPreloaderDisplayed] = useState(false);

  // то что будет доступно везде
  const [switchStatus, setSwitchStatus] = useStorage('switch', false);
  const [searchString, setSearchString] = useStorage('searchString', '');

  const [moviesList, setMoviesList] = useStorage('moviesList', []); // 100 movies from API
  const [displayedItems, setDisplayedItems] = useStorage('displayedItems', moviesList.slice(0, itemsPreload));
  const [filteredMovies, setFilteredMovies] = useStorage('filteredMovies', []);
  const [savedMovies, setSavedMovies] = useStorage('savedMovies', []);

  const navigate = useNavigate();

  useEffect(() => {
    MainApi.getUserInfo().then((res) => {
      setCurrentUser(res);
    }).catch((err => {
      console.log(err)
    }));
    MainApi.getSavedMovies().then((res) => {
      setSavedMovies(res);
    })
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

  function handleLogin(result) {
    console.log(result);
    setLoggedIn(true);
    navigate("/movies", {replace: true});
  }

  function handleRegistration(result) {
    console.log(result);
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

  function handleSwitch(status){
    setSwitchStatus(status);
    let filtered = sortMovies(moviesList, searchString, status);
    setFilteredMovies(filtered);
    setDisplayedItems(filtered.slice(0, initialPreload));
  }

  function getBeatMovies(string) {
    setPreloaderDisplayed(true);
    api.getMovies().then((res) => {
      let arrWithLikes = addIsLikedToMovies(res, savedMovies);
      setSearchString(string);
      setMoviesList(arrWithLikes);
      let filtered = sortMovies(arrWithLikes, string, switchStatus);
      setFilteredMovies(filtered);
      setDisplayedItems(filtered.slice(0, initialPreload));
    }).finally(() => {
      setPreloaderDisplayed(false)
    });
  }

  function loadMore() {
    const nextItems = filteredMovies.slice(
      displayedItems.length,
      displayedItems.length + itemsPreload
    )
    setDisplayedItems(prevItems => [...prevItems, ...nextItems]);
  }

  function handleMovieUnsave(movie) {
    console.log(movie)
  }

  function handleMovieLike(movie) {
    console.log('click')
    if (isMovieSaved(movie, savedMovies) === false) {
      MainApi.createMovie(
        movie.country,
        movie.director,
        movie.duration,
        movie.year,
        movie.description,
        movie.image.url,
        movie.trailerLink,
        movie.image.url,
        movie.id,
        movie.nameEN,
        movie.nameRU
      ).then((res) => {
        setSavedMovies([...savedMovies, res]);
        movie.isLiked = true
      })
    } else {
      console.log('already saved, ...deleting');
      let realId = findById(movie.id, savedMovies);
      console.log(realId)
      MainApi.deleteMovie(realId)
      .then((res) => {
        console.log('deleted!')
        movie.isLiked = false
      })
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App root">
        <Routes>
          <Route path='/' element={<Main isLoggedIn={isLoggedIn}/>}/>
          <Route path='/signin' element={<Login handleLogin={handleLogin}/>}/>
          <Route path='/signup' element={<Register handleRegistration={handleRegistration}/>}/>
          <Route path='/movies' element={<ProtectedRouteElement element={Movies} isLoggedIn={isLoggedIn} getMovies={getBeatMovies} moviesList={filteredMovies} displayedItems={displayedItems} isPreloaderDisplayed={isPreloaderDisplayed} loadMore={loadMore} handleSwitch={handleSwitch} switchStatus={switchStatus} handleMovieLike={handleMovieLike}/>}/>
          <Route path='/saved-movies' element={<ProtectedRouteElement element={SavedMovies} isLoggedIn={isLoggedIn}/>} handleMovieUnsave={handleMovieUnsave}/>
          <Route path='/profile' element={<ProtectedRouteElement element={Profile} isLoggedIn={isLoggedIn} handleUpdateUser={handleUpdateUser}/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
