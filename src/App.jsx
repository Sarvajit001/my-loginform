import { BrowserRouter as Router , Routes ,Route ,Link } from 'react-router-dom'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import './index.css'
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Stopwatch from './components//Stopwatch';
import AccordionData from './components/AccordianData';
import ToastContainer from './components/ToastContainer';
import SearchBar from './components/SearchBar';
// import Nav from './components/Nav';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Router>
          <div className="app">
      
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
            <Route path = "/AccordianData" element={<AccordionData/>}/>
            <Route path = "/toast" element={<ToastContainer/>}/>
            <Route path = "/searchBartask" element={<SearchBar/>}/>
          
          {/* Add more routes later */}
          </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
