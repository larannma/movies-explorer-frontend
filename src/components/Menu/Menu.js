import './Menu.css'
import Navigation from '../Navigation/Navigation'
import AccountButton from '../AccountButton/AccountButton'
import useScreenWidth from '../useScreenWidth'

function Menu({ isOpen, handleMenu, isBurgerMenu }) {
  const windowWidth = useScreenWidth();
  return (
    <div className={`menu  ${isOpen & windowWidth <= 768 ? "menu__visible": ""}`}>
      <div className={`menu__hover ${!isOpen ? 'menu__hover_opacity-none' : ''}`}>

      </div>
      <div className='menu__main'>
        <button onClick={handleMenu} className='menu__close'></button>
        <div className='menu__container'>
          <p className='menu__title'>Главная</p>
          <Navigation isBurgerMenu={isBurgerMenu}/>
        </div>
        <AccountButton/>
      </div>
    </div>
  )
}

export default Menu