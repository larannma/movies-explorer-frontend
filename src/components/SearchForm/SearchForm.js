import './SearchForm.css'
import CustomSwitch from '../CustomSwitch/CustomSwitch'

function SearchForm( { getMovies } ) {

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
          <CustomSwitch/>
          <p className='search-form__shortsTitle'>Короткометражки</p>
        </div>
    </section>
  )
}

export default SearchForm