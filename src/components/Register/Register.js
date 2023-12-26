import './Register.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import Logo from '../Logo/Logo';
import * as MainApi from '../../utils/MainApi';
import FormValidator from '../../utils/FormValidator'
import config from '../../utils/constants';
// import { parseErrorMessage } from '../../utils/sortingMovies';

function Register({ handleRegistration, handleLogin }) {
  const [ submitError, setSubmitError ] = useState('')
  const navigate = useNavigate();
  const formRef = useRef(null);

  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  const isEmailValid = (email) => {
    return email.endsWith('.com') || email.endsWith('.ru') || email.endsWith('.net') || email.endsWith('.org');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, password } = formValue;

    if (!isEmailValid(email)) {
      setSubmitError('Пожалуйста, введите корректный адрес электронной почты');
      return;
    }

    MainApi.register(name, email, password).then((res) => {
      // console.log(res)
      if (res.message === 'Пользователь успешно зарегестрирован') {
        console.log('TELEPORTING TO LOGIN');
        // Loging in
        MainApi.authorize(email, password)
          .then((data) => {
            if (data.token){
                setFormValue({email: '', password: ''});
                handleLogin("секретный токен получен");
              }
          })
          .catch(err => setSubmitError("Логин или пароль введены неверно"));
        // 
        navigate('/signin', {replace: true});
        handleRegistration("success");
      } else {
        console.log('ошибка при регистрации')
        // res.text().then((err) => {
        //   setSubmitError(parseErrorMessage(err))
        // })
        setSubmitError("Ошибка при регистрации")
        handleRegistration("fail");
      }
		}
		).catch(err => {
      
      handleRegistration("fail");
      // setSubmitError(err)
    });
  }

  useEffect(() => {
    if (formRef.current) {
      const validator = new FormValidator(config, formRef.current);
      validator.enableValidation();
    }
  }, []);

  return (
    <main className='register'>
      <Logo/>
      <h1 className='register__title'>Добро пожаловать!</h1>
      <form ref={formRef} className='register__form my-form' onSubmit={handleSubmit}>
        <div className='register__inputConiainer'>
          <label className='register__inputTitle'>Имя</label>
          <input id='name' name='name' onChange={handleChange} className='register__input form__text' placeholder='Виталий' required minLength={2} maxLength={40}></input>
          <span className="register__errorMessage name-error form__text-error"></span>
        </div>
        <div className='register__inputConiainer'>
          <label className='register__inputTitle'>E-mail</label>
          <input id='email' name='email' onChange={handleChange}  className='register__input form__text' placeholder='pochta@yandex.ru' required type='email'></input>
          <span className="register__errorMessage email-error form__text-error"></span>
        </div>
        <div className='register__inputConiainer'>
          <label className='register__inputTitle'>Пароль</label>
          <input id='password' name='password' onChange={handleChange} className='register__input form__text' type="password" required minLength={8} maxLength={40} placeholder="••••••••••••••"></input>
          <span className="register__errorMessage password-error form__text-error"></span>
        </div>
        <p className='register__submit-error'>{submitError}</p>
        <button type='submit' className='register__submitButton form__submit-btn form__submit-btn_inactive'>Зарегистрироваться</button>
        <p className='register__subtitle'>Уже зарегистрированы? <a href='./' className='register__subtitleLink'>Войти</a></p>
      </form>
    </main>
  )
}

export default Register