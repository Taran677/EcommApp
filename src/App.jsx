import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/Navbar'
import About from './components/About';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <About></About>
    </>
  )
}

export default App
