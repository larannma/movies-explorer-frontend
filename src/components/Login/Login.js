import './Login.css'
import logoImage from '../../images/header__logo.svg'

function Login() {
    return (
        <div className='login'>
            <img src={logoImage} className='login__logo'></img>
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
                <button className='login__submitButton'>Зарегистрироваться</button>
                <p className='login__subtitle'>Уже зарегистрированы? <a className='login__subtitleLink'>Войти</a></p>
            </form>
            
        </div>
    )
}

export default Login