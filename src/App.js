
import './App.css';
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"
import Home from './page/Home';
import Singup from './page/Singup';
import Login from './page/Login';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element ={<Login/>}/>
          <Route path="/home" element ={<Home/>}/>
          <Route path="/singup" element ={<Singup/>}/>

        </Routes>
      </Router>
   
    </div>
  );
}

export default App;
