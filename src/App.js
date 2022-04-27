import Footer from 'components/Footer';
import Header from 'components/Header';
import NotFound from 'components/NotFound';
import Cart from 'features/Cart';
import Catalog from 'features/Catalog';
import Products from 'features/Products';
import ProductViewModal from 'features/Products/components/ProductViewModal';
import Home from 'pages/Home';
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
      <ProductViewModal />
    </div>
  )
}

export default App;
