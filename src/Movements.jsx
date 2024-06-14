import React from 'react'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import {BrowserRouter , Link , Routes , Route} from 'react-router-dom'
const Movements = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/'  element={<Page1/>}/>
    <Route path='/2'  element={<Page2/>}/>
    <Route path='/3'  element={<Page3/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default Movements