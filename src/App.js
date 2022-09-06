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
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './components/Orders';
import Footer from './components/Footer';
import ProductSell from './components/ProductSell';
import ProductItem from './components/ProductItem';
const promise = loadStripe("pk_test_51LaomoBX9LWjlI5R7tWZI9DRwjEJQN4IOlB77LU8kIqYpiGQWK1bJJZbV8qdxauxJcH5ImKecW0hPqvDht3DEGap00kB96G7vN");
function App() {
      const dispatch = useDispatch()

      useEffect(() => {
        auth.onAuthStateChanged(authUser => {
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
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/payment' element={ 
            <Elements stripe={promise}>
            <Payment />
           </Elements>
          } />
          <Route path='/orders' element={<Orders />} />
          <Route path='/product-sell' element={<ProductSell />} />
          <Route path='/product-item/:productId' element={<ProductItem /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
