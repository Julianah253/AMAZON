import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Carousel from './components/carousel/Carousel'
// <<<<<<< HEAD
import Card from './components/cards/Card'

// =======
// import Navbar from './components/navbar/Navbar'
// >>>>>>> 13ab281 (image-removed-and-another-added)
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
      <Header/>
      <Nav/>
{/* <<<<<<< HEAD */}
      <Carousel />
      <Card className="cardposition" />
{/* ======= */}
       {/* <Navbar/> */}
      
      {/* <Carousel /> */}
{/* >>>>>>> 13ab281 (image-removed-and-another-added) */}

      <Footer/>
    </div>
  )
}


export default App

