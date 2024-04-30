import '../src/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { userAuthentication } from './hooks/userAuthentication';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Register/Register';
import Login from '../src/pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import CreatePost from './pages/CreatePost/CreatePost';
import Loading from './assets/Loading.gif';



function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = userAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);
  if (loadingUser) {
    return <div className="container load"><img src={Loading} alt="Gif Loading User" width="120px" height="120px" /></div>
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/post/create" element={<CreatePost />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;