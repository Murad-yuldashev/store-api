import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductList from './containers/ProductList';
import ProductDetails from './containers/ProductDetails';
import NotFound from './containers/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
