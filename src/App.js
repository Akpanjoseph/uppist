// import logo from './logo.svg';
import './App.css';
import { Checkout } from './component/Checkout';
import { Home } from './component/Home';
import { CartProvider } from './CardContext';


import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div  >
      <CartProvider>
        <Router>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>

        </Router>l
      </CartProvider>
    </div>
  );
}

export default App;
