import * as MainApi from '../../utils/MainApi';
import './Profile.css'
import React from "react";
import Header from '../Header/Header'
import { useRef, useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";
import FormValidator from '../../utils/FormValidator'
import config from '../../utils/constants';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile( { isLoggedIn, handleUpdateUser, onExit }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isSubmitButtonActive, setSubmitButtonActive] = React.useState(false);
  const [ submitError, setSubmitError ] = useState('');
  const [ submitSuccess, setSubmitSuccess ] = useState('')

  const formRef = useRef(null);

  // const navigate = useNavigate();

  const isEmailValid = (email) => {
    return email.endsWith('.com') || email.endsWith('.ru') || email.endsWith('.net') || email.endsWith('.org');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmailValid(email)) {
      setSubmitButtonActive(false);
      setSubmitError('Пожалуйста, введите корректный адрес электронной почты');
      setSubmitButtonActive(false);
      return;
    }
    MainApi.editUserInfo(name, email).then((res) => {
      handleUpdateUser({name, email});
      setSubmitError('')
      setSubmitButtonActive(false);
      setSubmitSuccess('Данные профиля успешно обновлены')
    }).catch((err => {
      setSubmitSuccess('');
      setSubmitButtonActive(false);
      setSubmitError('При обновлении данных профиля произошла ошибка');
    }));
  }

  React.useEffect(() => {
    setName(currentUser.name ?? "");
    setEmail(currentUser.email ?? "");
  }, [currentUser]);


  function isValid(nameValue, emailValue){
    if (nameValue === currentUser.name && emailValue === currentUser.email){
      return false;
    }
    return true;
  }

  function handleNameChange(e) {
    setSubmitButtonActive(isValid(e.target.value, email));
    setName(e.target.value);
  }
  
  function handleEmailChange(e) {
    setSubmitButtonActive(isValid(name, e.target.value));
    setEmail(e.target.value);
  }

  useEffect(() => {
    if (formRef.current) {
      const validator = new FormValidator(config, formRef.current);
      validator.enableValidation();
    }
  }, []);

  return(
    <>
      <div className='profilePage'>
        <Header headerColor={'light'} isLoggedIn={isLoggedIn}/>
        <main className='profile'>
          <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
          <form ref={formRef} onSubmit={handleSubmit} className='profile__editForm my-form'>
            <div className='profile__inputContainer'>
              <label className='profile__inputTitle'>Имя</label>
              <input id='name'  onChange={handleNameChange} name='name' placeholder={name} className='profile__input form__text' required minLength={2} maxLength={40} type='text' value={name}></input>
              {/* <span className="profile__errorMessage name-error form__text-error">error</span> */}
            </div>
            <div className='profile__inputContainer'>
              <label className='profile__inputTitle'>E-mail</label>
              <input id='email' onChange={handleEmailChange} name='email' placeholder={email} className='profile__input form__text' required type='email' value={email} ></input>
            </div>
            <span className="profile__errorMessage name-error email-error form__text-error"></span>
            <div className='profile__buttonContainer'>
              <p className='profile__submit-error profile__submit-error_success'>{submitSuccess}</p>
              <p className='profile__submit-error'>{submitError}</p>
              <button type='submit' className={`profile__editButton profile__button form__submit-btn form__submit-btn_inactive ${isSubmitButtonActive ? 'form__submit-btn_active' : ''}`}>Редактировать</button>
              <button type='button' className='profile__exitButton profile__button' onClick={onExit} >Выйти из аккаунта</button>
            </div>
            </form>
        </main>
      </div>
    </>
  )
}

export default Profile