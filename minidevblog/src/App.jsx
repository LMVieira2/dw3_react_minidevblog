import './App.css'
import { BrowserRouter, Routes, Route, Navigate, Form } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { userAuthentication } from './hooks/userAuthentication'
import { useState, useEffect } from 'react'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import CreatePost from './pages/CreatePost/CreatePost'
import DashBoard from './pages/Dashboard/Dashboard'
import Register from './pages/Register/Register'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Login from './pages/Login/Login'
import loading from './assets/Loading.gif'

function App(){
  const [user, setUser] = useState(undefined)
  const { auth } = userAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user)})
  }, [auth])
  
  if(loadingUser) {
    return <div className='container load'><img src={loading} alt="gif loading user" width="120px" height="120px"></img></div>
  }

  return(
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/post/create' element={<CreatePost />} />
              <Route path='/dashboard' element={<DashBoard />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App