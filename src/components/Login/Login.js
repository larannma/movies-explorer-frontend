import './Login.css'
import logoImage from '../../images/header__logo.svg'
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    function goMain() {
        navigate('/', { replace: true });
    }

    function goRegister() {
        navigate('/signup', { replace: true });
    }

    return (
        <div className='login'>
            <img src={logoImage} className='login__logo' alt='green circle'></img>
            <h1 className='login__title'>Добро пожаловать!</h1>
            <form className='login__form'>
                <div className='login__inputConiainer'>
                    <p className='login__inputTitle'>E-mail</p>
                    <input className='login__input' placeholder='pochta@yandex.ru'></input>
                </div>
                <div className='login__inputConiainer'>
                    <p className='login__inputTitle'>Пароль</p>
                    <input className='login__input' type="password"></input>
                </div>
                <p className='login__errorMessage'>Что-то пошло не так...</p>
                <button className='login__submitButton' onClick={goMain}>Войти</button>
                <p className='login__subtitle'>Еще не зарегистрированы? <a className='login__subtitleLink' onClick={goRegister}>Регистрация</a></p>
            </form>
            
        </div>
    )
}

export default Login