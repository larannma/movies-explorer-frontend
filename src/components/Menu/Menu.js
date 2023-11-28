import './Menu.css'
import Navigation from '../Navigation/Navigation'
import AccountButton from '../AccountButton/AccountButton'

function Menu() {
  return (
    <div className='menu'>
      <div className='menu__hover'>

      </div>
      <div className='menu__main'>
        <p className='menu__title'>Главная</p>
        <Navigation/>
        <AccountButton/>
      </div>
    </div>
  )
}

export default Menu