import './Profile.css'
import Header from '../Header/Header'
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  function onExit() {
    navigate('/', { replace: true });
  }

  return(
    <>
      <div className='profilePage'>
        <Header headerColor={'light'}/>
        <main className='profile'>
          <h1 className='profile__title'>Привет, Виталий!</h1>
          <form className='profile__editForm'>
            <div className='profile__inputContainer'>
              <label className='profile__inputTitle'>Имя</label>
              <input placeholder='Виталий' className='profile__input' required minLength={2} maxLength={40}></input>
            </div>
            <div className='profile__inputContainer'>
              <label className='profile__inputTitle'>E-mail</label>
              <input placeholder='pochta@yandex.ru' className='profile__input' required type='email'></input>
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