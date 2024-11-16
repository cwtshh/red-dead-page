import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import NavBar from './components/navbar/NavBar'
import Gang from './pages/gang/Gang'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="h-full w-full font-custom">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/vanderlindgang' element={<Gang />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
