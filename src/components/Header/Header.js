import React from "react";
import useScreenWidth from '../useScreenWidth'
import './Header.css'
import greenCircle from '../../images/header__logo.svg'
import AccountButton from "../AccountButton/AccountButton";
import Navigation from '../Navigation/Navigation';
import Menu from '../Menu/Menu';

function Header({ headerColor }) {
  const [isMenuOpen, setMenu] = React.useState(false);
  const [isLoggedIn, setLoggedIn] = React.useState(false)
  const [isBurgerMenu, setBurgerMenu] = React.useState(false)
  const windowWidth = useScreenWidth();

  React.useEffect(() => {
    setBurgerMenu(windowWidth <= 768);
  }, [windowWidth]);

  function handleMenu() {
    if (!isMenuOpen){
      setMenu(true)
    }
    else {
      setMenu(false);
    }  
  }

  function login() {
    setLoggedIn(true);
  }
  
  return (
    <header className={`header ${headerColor === 'light' ? 'header_theme_light' : ''}`}>
      <div className='header__container'>
        <Menu  isOpen={isMenuOpen} handleMenu={handleMenu} isBurgerMenu={isBurgerMenu}/>
        <img src={greenCircle} alt='green cercle'></img>
        {windowWidth > 768 & isLoggedIn ? 
          <>
            <Navigation isBurgerMenu={isBurgerMenu} isThemeLight={headerColor}/>
            <AccountButton/>
          </> : <></>
        }
        {windowWidth <= 768 & isLoggedIn ? <button onClick={handleMenu} className={`header__menu ${headerColor === 'light' ? 'header__menu_theme_light' : ''}`}></button> : <></>}
        {!isLoggedIn ?
          <div className="header__loginRegistration">
            <button className="header__registrationButton">Регистрация</button>
            <button onClick={login} className="header__loginBotton">Войти</button>
          </div> : <></>
        }
      </div>
    </header>
  );
}

export default Header;
