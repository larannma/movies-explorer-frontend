import './Login.css'
import Logo from '../Logo/Logo';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as MainApi from '../../utils/MainApi';

function Login( { handleLogin }) {
    const navigate = useNavigate();

    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
      }
    );

    const handleChange = (e) => {
        const {name, value} = e.target;
    
        setFormValue({
          ...formValue,
          [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formValue.email || !formValue.password){
          return;
        }
        MainApi.authorize(formValue.email, formValue.password)
          .then((data) => {
            if (data.token){
                setFormValue({email: '', password: ''});
                handleLogin("секретный токен получен");
              }
          })
          .catch(err => console.log(err));
      }

    return (
        <main className='login'>
            <Logo/>
            <h1 className='login__title'>Рады видеть!</h1>
            <form onSubmit={handleSubmit} className='login__form'>
                <div className='login__inputConiainer'>
                    <label className='login__inputTitle'>E-mail</label>
                    <input onChange={handleChange} name='email' className='login__input' placeholder='pochta@yandex.ru' required></input>
                </div>
                <div className='login__inputConiainer'>
                    <label className='login__inputTitle'>Пароль</label>
                    <input onChange={handleChange} name='password' className='login__input' type="password" minLength={8} maxLength={40} required placeholder="••••••••••••••"></input>
                </div>
                <button type='submit' className='login__submitButton'>Войти</button>
                <p className='login__subtitle'>Еще не зарегистрированы?  <a href='./signup' className='login__subtitleLink'> Регистрация</a></p>
            </form>
            
        </main>
    )
}

export default Login