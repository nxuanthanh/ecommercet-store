import Footer from 'components/Footer';
import Header from 'components/Header';
import NotFound from 'components/NotFound';
import Cart from 'pages/Cart';
import Catalog from 'pages/Catalog';
import Home from 'pages/Home';
import Products from 'pages/Products';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="container">
        <div className="main">
          <Outlet />
          <Routes>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="catalog/:slug" element={<Products />} />
            <Route path="cart" element={<Cart />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App;
