import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import './index.css'
import LoginForm from './components/LoginForm'  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <LoginForm/>
     {/* <h1 className='title'>Login Form</h1> */}
   
    </>
  )
}

export default App
