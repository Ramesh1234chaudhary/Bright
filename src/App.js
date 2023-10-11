import logo from './logo.svg';
import './App.css';
 import Navbar from './Components/Navbar';
 import { Routes,Route } from 'react-router-dom';
 import Retail from './Components/Retail';
 import Ourproduct from './Components/Ourproduct';
 import About from './Components/About';
import Frequently from './Components/Frequently';
import Contact from './Components/Contact';
import Home from './Home';
function App() {
  return (
    <div className="App">
        <Navbar/>
         <Routes>
         <Route path='/'element={<Home/>}/>
          <Route path='/Retail'element={<Retail/>}/>
          <Route path='/Our-Product'element={<Ourproduct/>}/>
          <Route path='/About-Us'element={<About/>}/>
          <Route path='/FAQ'element={Frequently}/>
          <Route path='/Contact-Us'element={Contact}/>
         </Routes>
    </div>
  );
}

export default App;
