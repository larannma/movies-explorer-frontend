import './Navigation.css'
import { useNavigate } from "react-router-dom";

function Navigation({ isBurgerMenu, isThemeLight }) {
    const navigate = useNavigate();

    function goMovies() {
        navigate('/movies', { replace: true });
    }

    function goSavedMovies() {
        navigate('/saved-movies', { replace: true });
    }

    return (
    <div className={`navigation ${isBurgerMenu ? 'navigation_side' : ''}`}>
        <p onClick={goMovies} className={`navigation__item ${isBurgerMenu ? 'navigation__item_theme_light navigation__bold' : ''} ${isThemeLight === 'light' ? 'navigation__item_theme_light' : ''}`}>Фильмы</p>
        <p onClick={goSavedMovies} className={`navigation__item ${isBurgerMenu ? 'navigation__item_theme_light navigation__bold' : ''} ${isThemeLight === 'light' ? 'navigation__item_theme_light' : ''}`}>Сохранённые фильмы</p>
    </div>
    )
}

export default Navigation