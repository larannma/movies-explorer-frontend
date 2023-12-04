import planetWEB from '../../images/planet.svg'
import './Promo.css'

function Promo() {
  return (
    <section class='promo root__section'>
      <div className='promo__container'>
        <img className="promo__planetWEB" src={planetWEB} alt='планета из слов "WEB"'></img>
        <div class='promo__info'>
            <h1 class='promo__title'>Учебный проект студента факультета Веб&#8722;разработки.</h1>
            <p class='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <a href='#anchor' class='promo__findMore'>Узнать больше</a>
        </div>
      </div>
    </section>
  )
}

export default Promo;