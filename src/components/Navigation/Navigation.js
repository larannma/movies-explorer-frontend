import './Navigation.css'

function Navigation({ isBurgerMenu, isThemeLight }) {

    return (
    <nav className={`navigation ${isBurgerMenu ? 'navigation_side' : ''}`}>
        <a href='./movies'  className={`navigation__item ${isBurgerMenu ? 'navigation__item_theme_light navigation__bold' : ''} ${isThemeLight === 'light' ? 'navigation__item_theme_light' : ''}`}>Фильмы</a>
        <a href='./saved-movies' className={`navigation__item ${isBurgerMenu ? 'navigation__item_theme_light navigation__bold' : ''} ${isThemeLight === 'light' ? 'navigation__item_theme_light' : ''}`}>Сохранённые фильмы</a>
    </nav>
    )
}

export default Navigation