import './Footer.css'

function Footer () {
  return (
    <footer className='footer root__section'>
      <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__info'>
        <p className='footer__year'>© 2023</p>
        <div className='footer__links'>
          <p className='footer__yaPractikum'>Яндекс.Практикум</p>
          <p className='footer__github'>Github</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;