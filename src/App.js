import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';




function App() {


  return (
    <>

      <BrowserRouter>
        <>
          <Navbar />
          <div className='form'>
          <Routes>

          <Route index element={<Home />} />

          <Route path="/about" element={<About />} />

          </Routes>
          </div>
          </>
      </BrowserRouter>
      
    </>
  );
}

export default App;
