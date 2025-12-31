import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Home, HookerManagement, RnD} from './Tabs'
import Nav from './Components/Nav'
import {AppLayout} from './styles/layout/AppLayout'

const App = (): React.ReactElement => (
  <AppLayout>
    <Nav />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='hooker-management' element={<HookerManagement />} />
      <Route path='rnd' element={<RnD />} />
    </Routes>
  </AppLayout>
)

export default App
