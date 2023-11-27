import './Portfolio.css'

function Portfolio() {
  return (
    <div className='portfolio root__section'>
      <h4 className='portfolio__title'>Портфолио</h4>
      <ul className='protfolio__list'>
        <li className='portfolio__elem'>
          <p className='portfolio__elemTitle'>Статичный сайт</p>
          <button className='portfolio__elemButton'></button>
        </li>
        <li className='portfolio__elem'>
          <p className='portfolio__elemTitle'>Адаптивный сайт</p>
          <button className='portfolio__elemButton'></button>
        </li>
        <li className='portfolio__elem'>
          <p className='portfolio__elemTitle'>Одностраничное приложение</p>
          <button className='portfolio__elemButton'></button>
        </li>
      </ul>
    </div>
  )
}

export default Portfolio