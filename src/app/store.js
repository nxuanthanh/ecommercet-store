import { configureStore } from '@reduxjs/toolkit';
import cartItemsReducer from 'features/Cart/cartItemSlice';
import productModalReducer from 'features/Products/productSlice';

const rootReducer = {
  productModal: productModalReducer,
  cartItems: cartItemsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
