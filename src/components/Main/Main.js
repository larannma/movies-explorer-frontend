import './Main.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Promo from '../Promo/Promo'
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio'

function Main() {
  return (
    <>
      <Header/>
      <main className='main'>
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>
      </main>
      <Footer/>
    </>
  )
}

export default Main;