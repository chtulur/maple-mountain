import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import {Home, HookerManagement, RnD} from './Tabs'

const App = (): React.ReactElement => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='hooker-management' element={<HookerManagement />} />
        <Route path='rnd' element={<RnD />} />
      </Routes>
    </>
  )
}

export default App
