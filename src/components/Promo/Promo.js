import planetWEB from '../../images/planet.svg'
import './Promo.css'

function Promo() {
  return (
    <div class='promo root__section'>
      <div className='promo__container'>
        <img className="promo__planetWEB" src={planetWEB} alt='planet from web words'></img>
        <div class='promo__info'>
            <h1 class='promo__title'>Учебный проект студента факультета Веб&#8722;разработки.</h1>
            <p class='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <button class='promo__findMoreButton'>Узнать больше</button>
        </div>
      </div>
    </div>
  )
}

export default Promo;