import useScreenWidth from '../useScreenWidth'
import './Header.css'
import greenCircle from '../../images/header__logo.svg'
import AccountButton from "../AccountButton/AccountButton";
import Navigation from '../Navigation/Navigation';
import Menu from '../Menu/Menu';

function Header() {
  const windowWidth = useScreenWidth();

  let isLoggedIn = true;
  
  return (
    <header className="header root__section ">
      <div className='header__container'>
        <Menu/>
        <img src={greenCircle} alt='green cercle'></img>
        {windowWidth > 770 & isLoggedIn ? 
          <>
            <Navigation/>
            <AccountButton/>
          </> : <></>
        }
        {windowWidth <= 770 & isLoggedIn ? <button className="header__menu header__menu_theme_light"></button> : <></>}
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
