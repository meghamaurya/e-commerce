import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/index';
import Products from './Components/Products/index'
import ProductDescription from './Components/ProductDescription';
import HomeProdDesc from './Components/HomeProdDesc';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/homeproddesc/:productId' element={<HomeProdDesc />} />
        <Route path='/products' element={<Products />} />
        {/* <Route path='/products/:productId' element={<ProductDescription />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
