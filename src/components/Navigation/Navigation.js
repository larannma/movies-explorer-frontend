import './Navigation.css'

function Navigation({ isBurgerMenu, isThemeLight }) {
    return (
    <div className={`navigation ${isBurgerMenu ? 'navigation_side' : ''}`}>
        <a href='#main' className={`navigation__item ${isBurgerMenu ? 'navigation__item_theme_light navigation__bold' : ''} ${isThemeLight === 'light' ? 'navigation__item_theme_light' : ''}`}>Фильмы</a>
        <a href='#main' className={`navigation__item ${isBurgerMenu ? 'navigation__item_theme_light navigation__bold' : ''} ${isThemeLight === 'light' ? 'navigation__item_theme_light' : ''}`}>Сохранённые фильмы</a>
    </div>
    )
}

export default Navigation