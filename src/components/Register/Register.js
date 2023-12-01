import './Register.css'
import logoImage from '../../images/header__logo.svg'
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    function goLogin() {
        navigate('/signin', { replace: true });
    }

    function goMain() {
        navigate('/', { replace: true });
    }

    return (
        <div className='register'>
            <img src={logoImage} className='register__logo' alt='green circle'></img>
            <h1 className='register__title'>Добро пожаловать!</h1>
            <form className='register__form'>
                <div className='register__inputConiainer'>
                    <p className='register__inputTitle'>Имя</p>
                    <input className='register__input' placeholder='Виталий'></input>
                </div>
                <div className='register__inputConiainer'>
                    <p className='register__inputTitle'>E-mail</p>
                    <input className='register__input' placeholder='pochta@yandex.ru'></input>
                </div>
                <div className='register__inputConiainer'>
                    <p className='register__inputTitle'>Пароль</p>
                    <input className='register__input' type="password"></input>
                </div>
                <p className='register__errorMessage'>Что-то пошло не так...</p>
                <button className='register__submitButton' onClick={goLogin}>Зарегистрироваться</button>
                <p className='register__subtitle'>Уже зарегистрированы? <a className='register__subtitleLink' onClick={goMain}>Войти</a></p>
            </form>
            
        </div>
    )
}

export default Register