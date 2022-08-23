import './App.css';
import Header from './components/Header'
import Checkout from './components/Checkout';
import Login from './components/Login';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import {setUser} from './components/reducer'
import Register from './components/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
      const dispatch = useDispatch()

      useEffect(() => {
        auth.onAuthStateChanged(authUser => {
          console.log(authUser)

          if (authUser) {
            dispatch(
              setUser({
                user:authUser
              })
            )
          } else {
            dispatch(
              setUser({
                user:null
              })
            )
          }
        })
        // eslint-disable-next-line 
      }, [])
  
  
  return (
    <div className="App">
      
          
       <ToastContainer />
      <Router>
        <Header />
        <Routes>
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
