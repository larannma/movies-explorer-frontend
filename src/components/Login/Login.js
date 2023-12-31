import './Login.css'
import Logo from '../Logo/Logo';
import { useState,  useEffect  } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import * as MainApi from '../../utils/MainApi';
import FormValidator from '../../utils/FormValidator';
import config from '../../utils/constants';

function Login( { handleLogin }) {
    // const navigate = useNavigate();
    const [ submitError, setSubmitError ] = useState('')
    const formRef = useRef(null);

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

    useEffect(() => {
      if (formRef.current) {
        const validator = new FormValidator(config, formRef.current);
        validator.enableValidation();
      }
    }, []);

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
          .catch(err => setSubmitError("Логин или пароль введены неверно"));
      }

    return (
        <main className='login'>
            <Logo/>
            <h1 className='login__title'>Рады видеть!</h1>
            <form ref={formRef} onSubmit={handleSubmit} className='login__form my-form'>
                <div className='login__inputConiainer'>
                    <label className='login__inputTitle'>E-mail</label>
                    <input id='email' onChange={handleChange} name='email' className='login__input form__text' placeholder='pochta@yandex.ru' required type='email'></input>
                    <span className="login__errorMessage email-error form__text-error"></span>
                </div>
                <div className='login__inputConiainer'>
                    <label className='login__inputTitle'>Пароль</label>
                    <input id='password' onChange={handleChange} name='password' className='login__input form__text' type="password" minLength={8} maxLength={40} required placeholder="••••••••••••••"></input>
                    <span className="login__errorMessage password-error form__text-error"></span>
                </div>
                <p className='login__submit-error'>{submitError}</p>
                <button type='submit' className='login__submitButton form__submit-btn form__submit-btn_inactive'>Войти</button>
                <p className='login__subtitle'>Еще не зарегистрированы?  <a href='./signup' className='login__subtitleLink'> Регистрация</a></p>
            </form>
            
        </main>
    )
}

export default Login