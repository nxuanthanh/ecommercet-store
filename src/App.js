import Footer from 'components/Footer';
import Header from 'components/Header';
import NotFound from 'components/NotFound';
import SignIn from 'features/Auth/pages/SignIn';
import Cart from 'features/Cart';
import Catalog from 'features/Catalog';
import Products from 'features/Products';
import ProductViewModal from 'features/Products/components/ProductViewModal';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Home from 'pages/Home';
import { useEffect, useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.scss';

// Configure Firebase.
const config = {
  apiKey: 'AIzaSyCPN2eVQEvk24lETiO8DVEYG0KT-CizepA',
  authDomain: 't-store-c851a.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        return;
      }
      setIsSignedIn(!!user);
      console.log(user.displayName);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

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
            <Route path="sign-in" element={<SignIn />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
      <ProductViewModal />
    </div>
  );
}

export default App;
