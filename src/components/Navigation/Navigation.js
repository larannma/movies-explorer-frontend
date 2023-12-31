import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation({ isBurgerMenu, isThemeLight }) {

    return (
    <nav className={`navigation ${isBurgerMenu ? 'navigation_side' : ''}`}>
        <Link to='/movies'  className={`navigation__item ${isBurgerMenu ? 'navigation__item_theme_light navigation__bold' : ''} ${isThemeLight === 'light' ? 'navigation__item_theme_light' : ''}`}>Фильмы</Link>
        <Link to='/saved-movies' className={`navigation__item ${isBurgerMenu ? 'navigation__item_theme_light navigation__bold' : ''} ${isThemeLight === 'light' ? 'navigation__item_theme_light' : ''}`}>Сохранённые фильмы</Link>
    </nav>
    )
}

export default Navigation