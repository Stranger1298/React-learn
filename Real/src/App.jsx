import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Header from './assets/Header'
import Maincontent from './assets/Main'
import Footer from './assets/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Maincontent />
        <Footer />
    </>
  )
}

export default App
