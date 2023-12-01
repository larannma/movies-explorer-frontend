import './Portfolio.css'

function Portfolio() {
  return (
    <section className='portfolio root__section'>
      <h4 className='portfolio__title'>Портфолио</h4>
      <ul className='portfolio__list'>
        <li>
          <a className='portfolio__elem' href='https://larannma.github.io/how-to-learn/' target='_blank' rel="noreferrer">
            <p className='portfolio__elemTitle'>Статичный сайт</p>
            <div className='portfolio__elemButton'></div>
          </a>
        </li>
        <li>
          <a className='portfolio__elem' href='https://larannma.github.io/russian-travel/' target='_blank' rel="noreferrer">
            <p className='portfolio__elemTitle'>Адаптивный сайт</p>
            <div className='portfolio__elemButton'></div>
          </a>
        </li>
        <li>
          <a className='portfolio__elem' href='https://mesto.larannma.nomoredomainsrocks.ru/my-profile' target='_blank' rel="noreferrer">
            <p className='portfolio__elemTitle'>Одностраничное приложение</p>
            <div className='portfolio__elemButton'></div>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio