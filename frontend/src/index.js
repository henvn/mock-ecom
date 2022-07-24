import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { Routes, Route, Link } from "react-router-dom"
import App from "./App"
import Login from './pages/login/index'
import Registration from './pages/registration/index'
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/signin' element={<Login/>}></Route>
      <Route path='/registration' element={<Registration/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
