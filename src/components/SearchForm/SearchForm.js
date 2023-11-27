import './SearchForm.css'
import CustomSwitch from '../CustomSwitch/CustomSwitch'

function SearchForm() {
  return (
    <form className='search-form'>
      <div className='search-form__container'>
        <input className='search-form__input' type="text" id="name" name="name" placeholder='Фильм'/>
        <button className='search-form__submit' type='submit'>Найти</button>
      </div>
      <div className='search-form__shorts'>
        <CustomSwitch/>
        <p className='search-form__shortsTitle'>Короткометражки</p>
      </div>
    </form>
  )
}

export default SearchForm