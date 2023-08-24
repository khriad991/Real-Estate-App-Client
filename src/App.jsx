import Header from "./component/header/Header.jsx";
import Hero from "./component/hero/Hero.jsx";
import './index.css';
import "./App.css";
import Companies from "./component/companies/Companies.jsx";
import Residencies from "./component/Residencies/Residencies.jsx";
function App() {
    return (
        <div className='App'>
          <div>
              <div className='white-gradient' />
              <Header/>
              <Hero/>
          </div>
            <Companies/>
            <Residencies/>
        </div>
    );
}

export default App;
