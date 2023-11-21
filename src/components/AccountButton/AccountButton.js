import './AccountButton.css'

function AccountButton() {
  return(
    <button className='account__loginContainer'>
      <p className='account__loginTitle'>Аккаунт</p>
      <div className='account__loginCircle'></div>
    </button>
  )
}

export default AccountButton;