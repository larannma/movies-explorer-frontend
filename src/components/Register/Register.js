import './Register.css'
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';
import * as MainApi from '../../utils/MainApi';

function Register({ handleRegistration }) {
  const navigate = useNavigate();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, password } = formValue;
    console.log(name, email, password)
    MainApi.register(name, email, password).then((res) => {
      navigate('/signin', {replace: true});
      handleRegistration("success");
			}
		).catch(()=> {
      handleRegistration("fail");
    });
  }

  return (
    <main className='register'>
      <Logo/>
      <h1 className='register__title'>Добро пожаловать!</h1>
      <form className='register__form' onSubmit={handleSubmit}>
        <div className='register__inputConiainer'>
          <label className='register__inputTitle'>Имя</label>
          <input name='name' onChange={handleChange} className='register__input' placeholder='Виталий' required minLength={2} maxLength={40}></input>
        </div>
        <div className='register__inputConiainer'>
          <label className='register__inputTitle'>E-mail</label>
          <input name='email' onChange={handleChange}  className='register__input' placeholder='pochta@yandex.ru' required></input>
        </div>
        <div className='register__inputConiainer'>
          <label className='register__inputTitle'>Пароль</label>
          <input name='password' onChange={handleChange} className='register__input' type="password" required minLength={8} maxLength={40} placeholder="••••••••••••••"></input>
        </div>
        <p className='register__errorMessage'>Что-то пошло не так...</p>
        <button type='submit' className='register__submitButton'>Зарегистрироваться</button>
        <p className='register__subtitle'>Уже зарегистрированы? <a href='./' className='register__subtitleLink'>Войти</a></p>
      </form>
    </main>
  )
}

export default Register