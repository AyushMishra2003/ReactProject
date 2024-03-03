import React from 'react'
import { ReactDOM } from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import Footer from './Component/Footer'
import Header from './Component/Header'
const App = () => {
  return (
    <div className='flex flex-col '>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
