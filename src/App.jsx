import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Toolbar from './components/Toolbar'
import Spreadsheet from './components/Spreadsheet'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <Toolbar/>
        <Spreadsheet/>
        <Footer/>
      </div>
    </>
  )
}

export default App
