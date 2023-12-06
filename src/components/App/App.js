
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


function App() {

  function getMovies() {
    console.log(api.getMovies())
  }

  return (
    <div className="App root">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/movies' element={<Movies getMovies={getMovies}/>}/>
        <Route path='/saved-movies' element={<SavadMovies/>}/> {/* зашакалился*/}
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
