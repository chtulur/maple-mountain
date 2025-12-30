import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Nav from './Components/Navbar'
import {Home, HookerManagement, RnD} from './Tabs'

const App = (): React.ReactElement => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='hooker-management' element={<HookerManagement />} />
        <Route path='rnd' element={<RnD />} />
      </Routes>
    </>
  )
}

export default App
