
import './App.css'
import Navigation from './Components/Navigation'
import { Route, Routes, } from "react-router-dom"
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './Components/Pages/Home'
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';
import Service from './Components/Pages/Service';
import Team from './Components/Pages/Team';



function App() {



  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/team" element={<Team />} />
      </Routes>

    </>
  )
}

export default App
