import { configureStore } from '@reduxjs/toolkit';
import productModalReducer from 'features/Products/productSlice';
import cartItemsReducer from 'features/Cart/components/ShoppingCart/cartItemSlice';

const rootReducer = {
  productModal: productModalReducer,
  cartItems: cartItemsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
