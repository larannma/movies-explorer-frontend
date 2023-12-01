import './AccountButton.css'
import { useNavigate } from "react-router-dom";

function AccountButton() {
  const navigate = useNavigate();

  function goProfile () {
    navigate('/profile', { replace: true });
  }

  return(
    <div onClick={goProfile} className='account account_theme_light'>
      <p className='account__loginTitle'>Аккаунт</p>
      <div className='account__loginCircle'></div>
    </div>
  )
}

export default AccountButton;