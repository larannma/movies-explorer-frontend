import Header from '../Header/Header'
import Main from '../Main/Main';
import Footer from '../Footer/Footer'
import Movies from '../Movies/Movies';
import './App.css'

function App() {
  return (
    <div className="App root">
      <Header/>
      {/* <Main/> */}
      <Movies/>
      <Footer/>
    </div>
  );
}

export default App;
