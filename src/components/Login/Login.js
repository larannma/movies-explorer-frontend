import './Login.css'
import Logo from '../Logo/Logo';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    function goRegister() {
        navigate('/signup', { replace: true });
    }

    return (
        <main className='login'>
            <Logo/>
            <h1 className='login__title'>Добро пожаловать!</h1>
            <form className='login__form'>
                <div className='login__inputConiainer'>
                    <label className='login__inputTitle'>E-mail</label>
                    <input className='login__input' placeholder='pochta@yandex.ru' required></input>
                </div>
                <div className='login__inputConiainer'>
                    <label className='login__inputTitle'>Пароль</label>
                    <input className='login__input' type="password" minLength={8} maxLength={40} required></input>
                </div>
                <p className='login__errorMessage'>Что-то пошло не так...</p>
                <button className='login__submitButton'>Войти</button>
                <p className='login__subtitle'>Еще не зарегистрированы? <p className='login__subtitleLink' onClick={goRegister}>Регистрация</p></p>
            </form>
            
        </main>
    )
}

export default Login