import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import { BrowserRouter, Route, Router,Routes } from 'react-router-dom'
import Graficos from './pages/Graficos'


function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/graficos' element={<Graficos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
