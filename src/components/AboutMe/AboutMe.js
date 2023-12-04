import './AboutMe.css'
import profileImage from '../../images/profilePhoto.jpeg'

function AboutMe() {
  return (
    <section className='aboutMe root__section'>
      <h2 className='aboutMe__title'>Студент</h2>
      <div className='aboutMe__container'>
        <img src={profileImage} alt="мальчик со светлыми волосами(автор страницы)" className='aboutMe__profileImage'></img>
        <div className='aboutMe__description'>
          <h3 className='aboutMe__name'>Виталий</h3>
          <p className='aboutMe__occupation'>Фронтенд-разработчик, 30 лет</p>
          <p className='aboutMe__life'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
  и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a className='aboutMe__link' href='https://github.com/larannma' target='_blank' rel="noreferrer">GitHub</a>
        </div>
        </div>
    </section>
  )
}

export default AboutMe