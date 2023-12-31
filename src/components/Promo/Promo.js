import planetWEB from '../../images/planet.svg'
import './Promo.css'

function Promo() {
  return (
    <section className='promo root__section'>
      <div className='promo__container'>
        <img className="promo__planetWEB" src={planetWEB} alt='планета из слов "WEB"'></img>
        <div className='promo__info'>
            <h1 className='promo__title'>Учебный проект студента факультета Веб&#8722;разработки.</h1>
            <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <a href='#anchor' className='promo__findMore'>Узнать больше</a>
        </div>
      </div>
    </section>
  )
}

export default Promo;