import './Register.css'
import Logo from '../Logo/Logo';

function Register() {
    return (
        <main className='register'>
            <Logo/>
            <h1 className='register__title'>Добро пожаловать!</h1>
            <form className='register__form'>
                <div className='register__inputConiainer'>
                    <label className='register__inputTitle'>Имя</label>
                    <input className='register__input' placeholder='Виталий' required minLength={2} maxLength={40}></input>
                </div>
                <div className='register__inputConiainer'>
                    <label className='register__inputTitle'>E-mail</label>
                    <input className='register__input' placeholder='pochta@yandex.ru' required></input>
                </div>
                <div className='register__inputConiainer'>
                    <label className='register__inputTitle'>Пароль</label>
                    <input className='register__input' type="password" required minLength={8} maxLength={40} placeholder="••••••••••••••"></input>
                </div>
                <p className='register__errorMessage'>Что-то пошло не так...</p>
                <button type='submit' className='register__submitButton'>Зарегистрироваться</button>
                <p className='register__subtitle'>Уже зарегистрированы? <a href='./' className='register__subtitleLink'>Войти</a></p>
            </form>
        </main>
    )
}

export default Register