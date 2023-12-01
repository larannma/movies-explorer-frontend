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
      <Header headerColor={'light'}/>
      <div className='profile'>
        <h1 className='profile__title'>Привет, Виталий!</h1>
        <form className='profile__editForm'>
          <div className='profile__inputContainer'>
            <p className='profile__inputTitle'>Имя</p>
            <input placeholder='Виталий' className='profile__input'></input>
          </div>
          <div className='profile__inputContainer'>
            <p className='profile__inputTitle'>E-mail</p>
            <input placeholder='pochta@yandex.ru' className='profile__input'></input>
          </div>
        </form>
        <div className='profile__buttonContainer'>
          <button className='profile__editButton profile__button'>Редактировать</button>
          <button className='profile__exitButton profile__button' onClick={onExit} >Выйти из аккаунта</button>
        </div>
      </div>
    </>
  )
}

export default Profile