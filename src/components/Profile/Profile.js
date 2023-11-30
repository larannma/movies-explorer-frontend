import './Profile.css'
import Header from '../Header/Header'

function Profile() {
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
          <div className='profile__buttonContainer'>
            <button>Редактировать</button>
            <button>Выйти из аккаунта</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Profile