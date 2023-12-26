import './SearchForm.css'
import CustomSwitch from '../CustomSwitch/CustomSwitch'
// import { useEffect } from 'react';
import config from '../../utils/constants';
import FormValidator from '../../utils/FormValidator'
import { useRef, useEffect } from 'react';

function SearchForm( { getMovies, handleSwitch, switchStatus, searchString } ) {
  const formRef = useRef(null);

  function onSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    // setSearchString(e.target.value);
    getMovies(formProps.name);
  }

  useEffect(() => {
    if (formRef.current) {
      const validator = new FormValidator(config, formRef.current);
      validator.enableValidation();
    }
  }, []);

  return (
    <section className='search-form my-form'>
        <form ref={formRef} className='search-form__container' onSubmit={onSubmit}>
          <input className='search-form__input form__text' type="text" id="name" name="name" placeholder={searchString ? searchString : "Фильм"} required defaultValue={searchString ? searchString : ''}/>
          <button type='submit' className='search-form__submit form__submit-btn form__submit-btn_inactive'>Найти</button>
          <span className="search-form__errorMessage name-error form__text-error"></span>
        </form>
        <div className='search-form__shorts'>
          <CustomSwitch handleSwitch={handleSwitch} switchStatus={switchStatus}/>
          <p className='search-form__shortsTitle'>Короткометражки</p>
        </div>
    </section>
  )
}

export default SearchForm