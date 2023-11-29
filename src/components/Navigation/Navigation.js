import './Navigation.css'

function Navigation({ isBurgerMenu }) {
    return (
    <div className={`navigation ${isBurgerMenu ? 'navigation_side' : ''}`}>
        <a href='#main' className={`navigation__item ${isBurgerMenu ? 'navigation__item_theme_light navigation__bold' : ''}`}>Фильмы</a>
        <a href='#main' className={`navigation__item ${isBurgerMenu ? 'navigation__item_theme_light navigation__bold' : ''}`}>Сохранённые фильмы</a>
    </div>
    )
}

export default Navigation