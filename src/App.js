import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;