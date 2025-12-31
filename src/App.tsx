import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Home, HookerManagement, RnD} from './Tabs'
import Nav from './Components/Nav'

const App = (): React.ReactElement => (
  <>
    <Nav />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='hooker-management' element={<HookerManagement />} />
      <Route path='rnd' element={<RnD />} />
    </Routes>
  </>
)

export default App
