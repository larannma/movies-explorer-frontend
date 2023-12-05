import './Login.css'
import Logo from '../Logo/Logo';

function Login() {
    return (
        <main className='login'>
            <Logo/>
            <h1 className='login__title'>Рады видеть!</h1>
            <form className='login__form'>
                <div className='login__inputConiainer'>
                    <label className='login__inputTitle'>E-mail</label>
                    <input className='login__input' placeholder='pochta@yandex.ru' required></input>
                </div>
                <div className='login__inputConiainer'>
                    <label className='login__inputTitle'>Пароль</label>
                    <input className='login__input' type="password" minLength={8} maxLength={40} required placeholder="••••••••••••••"></input>
                </div>
                <button className='login__submitButton'>Войти</button>
                <p className='login__subtitle'>Еще не зарегистрированы?  <a href='./signup' className='login__subtitleLink'> Регистрация</a></p>
            </form>
            
        </main>
    )
}

export default Login