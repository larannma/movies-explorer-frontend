import React, { useEffect, useState } from "react";
import './Header.css'
import greenCircle from '../../images/header__logo.svg'
import AccountButton from "../AccountButton/AccountButton";

function Header() {
  const [windowWidth, setWindowWidth] = useState(0);

  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);
  
  return (
    <header className="header root__section">
      <img src={greenCircle} alt='green cercle'></img>
      {/* {windowWidth > 770 ? 
      <>
        <div className='header__navigation'>
          <p className='header__navMovies'>Фильмы</p>
          <p className='header__navMovies'>Сохранённые фильмы</p>
        </div>
        <AccountButton/>
      </> : <button className="header__menu"></button>
      } */}
      <div className="header__loginRegistration">
        <button className="header__registrationButton">Регистрация</button>
        <button className="header__loginBotton">Войти</button>
      </div>
    </header>
  );
}

export default Header;
