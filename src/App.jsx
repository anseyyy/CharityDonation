import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route, Navigate,} from 'react-router-dom'
import Landing from './components/Landing'
import Header from './components/Header'
import Footer from './components/Footer'
import Campaines from './components/Campaines'
import ContactUs from './components/ContactUs'
import Donation from './components/Donation'
import AboutUs from './components/AboutUs'
import Volunteer from './components/Volunteer'
import ReadMore from './components/ReadMore'
import Partner from './components/Partner'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  

  return (
    <>
    
    

    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={ <Landing />} />
      <Route path='/campaigns' element={ <Campaines/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/donation' element={<Donation/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/volunteer' element={<Volunteer/>}/>
      <Route path='/readmore' element={<ReadMore/>}/>
      <Route path='/partner' element={<Partner/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>

    

    
    </>
  )
}

export default App
