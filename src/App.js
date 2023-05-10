import React from 'react'
import Footer from './components/footer/Footer'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
       {/* <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
       </BrowserRouter> */}

      <Footer/>
    </div>
  )
}

export default App