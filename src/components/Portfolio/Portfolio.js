import './Portfolio.css'

function Portfolio() {
  return (
    <div className='portfolio root__section'>
      <h4 className='portfolio__title'>Портфолио</h4>
      <ul className='protfolio__list'>
        <li>
          <a className='portfolio__elem' href='https://larannma.github.io/how-to-learn/' target='_blank' rel="noreferrer">
            <p className='portfolio__elemTitle'>Статичный сайт</p>
            <button className='portfolio__elemButton'></button>
          </a>
        </li>
        <li>
          <a className='portfolio__elem' href='https://larannma.github.io/russian-travel/' target='_blank' rel="noreferrer">
            <p className='portfolio__elemTitle'>Адаптивный сайт</p>
            <button className='portfolio__elemButton'></button>
          </a>
        </li>
        <li>
          <a className='portfolio__elem' href='https://mesto.larannma.nomoredomainsrocks.ru/my-profile' target='_blank' rel="noreferrer">
            <p className='portfolio__elemTitle'>Одностраничное приложение</p>
            <button className='portfolio__elemButton'></button>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Portfolio