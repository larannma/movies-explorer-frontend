import useScreenWidth from '../useScreenWidth'
import './Header.css'
import greenCircle from '../../images/header__logo.svg'
import AccountButton from "../AccountButton/AccountButton";

function Header() {
  const windowWidth = useScreenWidth();

  let isLoggedIn = true;
  
  return (
    <header className="header root__section">
      <div className='header__container'>
        <img src={greenCircle} alt='green cercle'></img>
        {windowWidth > 770 & isLoggedIn ? 
          <>
            <div className='header__navigation'>
              <p className='header__navMovies'>Фильмы</p>
              <p className='header__navMovies'>Сохранённые фильмы</p>
            </div>
            <AccountButton/>
          </> : <></>
        }
        {windowWidth <= 770 & isLoggedIn ? <button className="header__menu"></button> : <></>}
        {!isLoggedIn ?
          <div className="header__loginRegistration">
            <button className="header__registrationButton">Регистрация</button>
            <button className="header__loginBotton">Войти</button>
          </div> : <></>
        }
      </div>
    </header>
  );
}

export default Header;
