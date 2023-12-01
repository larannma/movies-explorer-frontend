import './Logo.css'
import greenCircle from '../../images/header__logo.svg'
import { useNavigate } from "react-router-dom";

function Logo() {
    const navigate = useNavigate();

    function goMain () {
        navigate('/', { replace: true });
    }

    return(
        <img src={greenCircle} alt='green cercle' className="logo" onClick={goMain}></img>
    )
}

export default Logo