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
          updateLikeStatus
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

  // error message
  const [errorMessage, setErrorMessage] = useState('');

  // то что будет доступно везде
  const [switchStatus, setSwitchStatus] = useStorage('switch', false);
  const [searchString, setSearchString] = useStorage('searchString', '');

  const [moviesList, setMoviesList] = useStorage('moviesList', []); // 100 movies from API
  const [displayedItems, setDisplayedItems] = useStorage('displayedItems', moviesList.slice(0, itemsPreload));
  const [filteredMovies, setFilteredMovies] = useStorage('filteredMovies', []);
  const [savedMovies, setSavedMovies] = useStorage('savedMovies', []);

  // filtered saved movies
  const [filteredSavedMovies, setFilteredSavedMovies] = useStorage('filteredSavedMovies', []);
  const [savedSwitchStatus, setSavedSwitchStatus] = useStorage('savedSwitch', false);
  const [savedSearchString, setSavedSearchString] = useStorage('savedSearchString', '');

  const navigate = useNavigate();

  function resetLocalStorage(){
    setLoggedIn(false);
    setSwitchStatus(false);
    setSearchString('');
    setMoviesList([]);
    setDisplayedItems([]);
    setFilteredMovies([]);
    setSavedMovies([]);
    setFilteredSavedMovies([]);
    setSavedSwitchStatus(false);
    setSavedSearchString('');
  }

  function getSaved() {
    setSavedSearchString('')
    setFilteredSavedMovies(savedMovies, '', savedSwitchStatus);
  }

  useEffect(() => {
    MainApi.getUserInfo().then((res) => {
      setCurrentUser(res);
    }).catch((err => {
      console.log(err)
    }));
    // 
    // setFilteredSavedMovies(savedMovies)
    // setFilteredSavedMovies(savedMovies, '', savedSwitchStatus)
  }, [savedMovies]);

  useEffect(() => {
    // 4 per line
    if (windowWidth >= 1280) {
      setInitialPreload(16);
      setItemsPreload(4)
    } else if (windowWidth >= 990 && windowWidth < 1280) {
      setInitialPreload(12);
      setItemsPreload(3)
    } else if (windowWidth >= 650 && windowWidth < 990) {
      setInitialPreload(8);
      setItemsPreload(2)
    } else {
      setInitialPreload(5);
      setItemsPreload(2);
    }
  }, [windowWidth]);

  function handleLogin(result) {
    MainApi.getUserInfo().then((res) => {
      setCurrentUser(res);
    }).catch((err => {
      console.log(err);
    }));
    MainApi.getSavedMovies().then((res) => {
      setSavedMovies(res);
    }).catch((err => {
      console.log(err);
    }));
    // console.log(result);
    setLoggedIn(true);
    navigate("/movies", {replace: true});
  }

  function handleRegistration(result) {
    // console.log(result);
  }

  const handleUpdateUser = (data) => {
    console.log(data);
    setCurrentUser(data);
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
      if (filtered.length === 0) {
        setErrorMessage('Ничего не найдено')
      } else {
        setErrorMessage('')
      }
      setFilteredMovies(filtered);
      setDisplayedItems(filtered.slice(0, initialPreload));
    })
    .catch(() => {
      setErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
    })
    .finally(() => {
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
    let realId = findById(movie.movieId, savedMovies);
      MainApi.deleteMovie(realId)
      .then((res) => {
        if (res) {
          const updatedSaved = savedMovies.filter(item => item._id !== res._id);
          setSavedMovies(updatedSaved)
          // update filtered saved movies
          // const updatedFilteredSaved = updatedSaved.filter(item => item._id !== res._id);
          // console.log(savedSearchString, savedSwitchStatus)
          // const updatedFilteredSaved = sortMovies(updatedSaved, savedSearchString, savedSwitchStatus);
          // console.log(updatedSaved, updatedFilteredSaved)
          setFilteredSavedMovies(sortMovies(updatedSaved, savedSearchString, savedSwitchStatus))
          setMoviesList(updateLikeStatus(moviesList, updatedSaved))
          setFilteredMovies(updateLikeStatus(filteredMovies, updatedSaved))
          setDisplayedItems(updateLikeStatus(displayedItems, updatedSaved))
        }
      })
  }

  function handleMovieLike(movie) {
    // console.log('click')
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
        const updatedSaved = [...savedMovies, res];
        setSavedMovies(updatedSaved);
        setMoviesList(updateLikeStatus(moviesList, updatedSaved))
        setFilteredMovies(updateLikeStatus(filteredMovies, updatedSaved))
        setDisplayedItems(updateLikeStatus(displayedItems, updatedSaved))
      })
    } else {
      let realId = findById(movie.id, savedMovies);
      MainApi.deleteMovie(realId)
      .then((res) => {
        console.log(res)
        if (res) {
          const updatedSaved = savedMovies.filter(item => item._id !== res._id);
          setSavedMovies(updatedSaved)
          setMoviesList(updateLikeStatus(moviesList, updatedSaved))
          setFilteredMovies(updateLikeStatus(filteredMovies, updatedSaved))
          setDisplayedItems(updateLikeStatus(displayedItems, updatedSaved))
        }
      })
    }
  }

  function handleSavedMoviesFilter(string){
    // console.log(search)
    setSavedSearchString(string);
    let savedFiltered = sortMovies(savedMovies, string, savedSwitchStatus);
    setFilteredSavedMovies(savedFiltered)
  }

  function handleSavedSwitch(value){
    setSavedSwitchStatus(value);
    let filtered = sortMovies(savedMovies, savedSearchString, value);
    setFilteredSavedMovies(filtered);
    // console.log(savedSearchString)
  }

  function handleExit() {
    console.log('LOGOUT ... ')
    MainApi.logout().then((res => {
      console.log(res)
      setLoggedIn(false)
      setCurrentUser({})
      resetLocalStorage();
      navigate('/', {replace: true});
    }))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App root">
        <Routes>
          <Route path='/' element={<Main isLoggedIn={isLoggedIn}/>}/>
          <Route path='/signin' element={<Login handleLogin={handleLogin}/>}/>
          <Route path='/signup' element={<Register handleRegistration={handleRegistration} handleLogin={handleLogin}/>}/>
          <Route path='/movies' element={<ProtectedRouteElement element={Movies} isLoggedIn={isLoggedIn} getMovies={getBeatMovies} moviesList={filteredMovies} displayedItems={displayedItems} isPreloaderDisplayed={isPreloaderDisplayed} loadMore={loadMore} handleSwitch={handleSwitch} switchStatus={switchStatus} handleMovieLike={handleMovieLike} searchString={searchString} errorMessage={errorMessage}/>}/>
          <Route path='/saved-movies' element={<ProtectedRouteElement element={SavedMovies} isLoggedIn={isLoggedIn} getMovies={handleSavedMoviesFilter} savedMovies={filteredSavedMovies} handleMovieLike={handleMovieUnsave} handleSwitch={handleSavedSwitch} switchStatus={savedSwitchStatus} searchString={''} getSaved={getSaved}/>} />
          <Route path='/profile' element={<ProtectedRouteElement element={Profile} isLoggedIn={isLoggedIn} handleUpdateUser={handleUpdateUser} onExit={handleExit}/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
