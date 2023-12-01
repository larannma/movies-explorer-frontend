import './Footer.css'

function Footer () {
  return (
    <footer className='footer'>
      <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__info'>
        <p className='footer__year'>© 2023</p>
        <div className='footer__links'>
          <a className='footer__yaPractikum' href='https://practicum.yandex.ru/' target='_blank' rel="noreferrer">Яндекс.Практикум</a>
          <a className='footer__github' href='https://github.com/larannma' target='_blank' rel="noreferrer">Github</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;