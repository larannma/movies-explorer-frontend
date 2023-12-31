import './Footer.css'

function Footer () {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__info'>
          <p className='footer__year'>© 2023</p>
          <ul className='footer__links'>
            <li>
              <a className='footer__yaPractikum' href='https://practicum.yandex.ru/' target='_blank' rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li>
              <a className='footer__github' href='https://github.com/larannma' target='_blank' rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;