import './SearchForm.css'
import CustomSwitch from '../CustomSwitch/CustomSwitch'
import { useEffect } from 'react';

function SearchForm( { getMovies, handleSwitch, switchStatus } ) {

  useEffect(() => {
    let localSearch = localStorage.getItem('searchString');
    if (localSearch) {
      document.getElementById("name").value = localSearch;
    }
  }, []);

  function onSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    getMovies(formProps.name)
  }

  return (
    <section className='search-form'>
        <form className='search-form__container' onSubmit={onSubmit}>
          <input className='search-form__input' type="text" id="name" name="name" placeholder='Фильм' required/>
          <button type='submit' className='search-form__submit'>Найти</button>
        </form>
        <div className='search-form__shorts'>
          <CustomSwitch handleSwitch={handleSwitch} switchStatus={switchStatus}/>
          <p className='search-form__shortsTitle'>Короткометражки</p>
        </div>
    </section>
  )
}

export default SearchForm