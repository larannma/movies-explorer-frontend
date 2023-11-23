import planetWEB from '../../images/planet.svg'
import './Promo.css'

function Promo() {
  return (
    <main class='promo'>
      <img className="promo__planetWEB" src={planetWEB} alt='planet from web words'></img>
      <div class='promo__info'>
          <h1 class='promo__title'>Учебный проект студента факультета Веб&#8722;разработки.</h1>
          <p class='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <button class='promo__findMoreButton'>Узнать больше</button>
      </div>
    </main>
  )
}

export default Promo;