import './App.css';
import Header from './components/Header'
import Checkout from './components/Checkout';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/' element={<Home />} />
         
          
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
