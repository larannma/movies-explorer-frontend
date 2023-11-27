import './AccountButton.css'

function AccountButton() {
  return(
    <button className='account__loginContainer account_theme_light'>
      <p className='account__loginTitle'>Аккаунт</p>
      <div className='account__loginCircle'></div>
    </button>
  )
}

export default AccountButton;