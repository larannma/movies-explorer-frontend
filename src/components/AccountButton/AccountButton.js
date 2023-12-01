import './AccountButton.css'
import { useNavigate } from "react-router-dom";

function AccountButton() {
  const navigate = useNavigate();

  function goProfile () {
    navigate('/profile', { replace: true });
  }

  return(
    <button onClick={goProfile} className='account__loginContainer account_theme_light'>
      <p className='account__loginTitle'>Аккаунт</p>
      <div className='account__loginCircle'></div>
    </button>
  )
}

export default AccountButton;