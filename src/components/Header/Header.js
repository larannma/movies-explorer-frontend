import React from "react";
import useScreenWidth from '../../utils/customHooks/useScreenWidth'
import './Header.css'

import AccountButton from "../AccountButton/AccountButton";
import Navigation from '../Navigation/Navigation';
import Menu from '../Menu/Menu';
import Logo from "../Logo/Logo";
import { useNavigate } from "react-router-dom";

function Header({ headerColor, isLoggedIn }) {
  const [isMenuOpen, setMenu] = React.useState(false);
  // const [isLoggedIn, setLoggedIn] = React.useState(true)
  const [isBurgerMenu, setBurgerMenu] = React.useState(false)
  const windowWidth = useScreenWidth();

  const navigate = useNavigate();


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

  function goLogin() {
    navigate('/signin', { replace: true });
  }

  function goRegister () {
    navigate('/signup', { replace: true });
  }
  
  return (
    <header className={`header ${headerColor === 'light' ? 'header_theme_light' : ''}`}>
      <div className='header__container'>
        <Menu  isOpen={isMenuOpen} handleMenu={handleMenu} isBurgerMenu={isBurgerMenu}/>
        <div className="header__imageContainer">
          <Logo/>
        </div>
        {windowWidth > 768 & isLoggedIn ? 
          <>
            <Navigation isBurgerMenu={isBurgerMenu} isThemeLight={headerColor}/>
            <AccountButton/>
          </> : <></>
        }
        {windowWidth <= 768 & isLoggedIn ? <button onClick={handleMenu} className={`header__menu ${headerColor === 'light' ? 'header__menu_theme_light' : ''}`}></button> : <></>}
        {!isLoggedIn ?
          <nav className="header__loginRegistration">
            <button type="button" onClick={goRegister} className="header__registrationButton">Регистрация</button>
            <button type="button" onClick={goLogin} className="header__loginBotton">Войти</button>
          </nav> : <></>
        }
      </div>
    </header>
  );
}

export default Header;
