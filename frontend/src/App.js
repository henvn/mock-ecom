import React from "react"
import Header from "./components/header/index"
import Footer from "./components/footer"
import Storefront from "./pages/Storefront"
import { Routes, Route } from "react-router-dom"
const App = () => {

  return (
    <div>
      <Header />
      <Routes>
        {/* 
    <Route path='/login' element={<Login />}/>
    <Route path="/registration" element={<Registration />} /> */}
        <Route path="/" element={<Storefront />} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
