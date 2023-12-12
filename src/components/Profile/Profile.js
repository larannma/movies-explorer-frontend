import './Profile.css'
import React from "react";
import Header from '../Header/Header'
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile( { isLoggedIn, handleUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const navigate = useNavigate();

  function onExit() {
    navigate('/', { replace: true });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    handleUpdateUser({ name, email });
  }

  React.useEffect(() => {
    setName(currentUser.name ?? "");
    setEmail(currentUser.about ?? "");
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return(
    <>
      <div className='profilePage'>
        <Header headerColor={'light'} isLoggedIn={isLoggedIn}/>
        <main className='profile'>
          <h1 className='profile__title'>Привет, Виталий!</h1>
          <form onSubmit={handleSubmit} className='profile__editForm'>
            <div className='profile__inputContainer'>
              <label className='profile__inputTitle'>Имя</label>
              <input onChange={handleNameChange} name='name' placeholder={currentUser.name} className='profile__input' required minLength={2} maxLength={40}></input>
            </div>
            <div className='profile__inputContainer'>
              <label className='profile__inputTitle'>E-mail</label>
              <input onChange={handleEmailChange} name='email' placeholder={currentUser.email} className='profile__input' required type='email'></input>
            </div>
              <div className='profile__buttonContainer'>
                <button type='submit' className='profile__editButton profile__button'>Редактировать</button>
                <button type='button' className='profile__exitButton profile__button' onClick={onExit} >Выйти из аккаунта</button>
              </div>
            </form>
        </main>
      </div>
    </>
  )
}

export default Profile