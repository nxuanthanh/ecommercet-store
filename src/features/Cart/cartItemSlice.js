import { createSlice } from '@reduxjs/toolkit';

const items = JSON.parse(localStorage.getItem('cart_items')) || [];

const initialState = { value: items };

const findItem = (arr, item) =>
  arr.filter((e) => e.slug === item.slug && e.color === item.color && e.size === item.size);

const delItem = (arr, item) =>
  arr.filter((e) => e.slug !== item.slug || e.color !== item.color || e.size !== item.size);

const sortItem = (arr) => arr.sort((a, b) => a.id > b.id);

const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;

      const duplicate = findItem(state.value, newItem);

      if (duplicate.length > 0) {
        state.value = delItem(state.value, newItem);

        state.value = [
          ...state.value,
          {
            ...newItem,
            id: duplicate[0].id,
            quantity: newItem.quantity + duplicate[0].quantity,
          },
        ];
      } else {
        state.value = [
          ...state.value,
          {
            ...newItem,
            id: state.value.length > 0 ? state.value[state.value.length - 1].id + 1 : 1,
          },
        ];
      }

      localStorage.setItem('cart_items', JSON.stringify(sortItem(state.value)));
    },

    updateItem: (state, action) => {
      const itemUpdate = action.payload;

      const item = findItem(state.value, itemUpdate);

      if (item.length > 0) {
        state.value = delItem(state.value, itemUpdate);
        state.value = [
          ...state.value,
          {
            ...itemUpdate,
            id: item[0].id,
          },
        ];
        localStorage.setItem('cart_items', JSON.stringify(sortItem(state.value)));
      }
    },
    removeItem: (state, action) => {
      const item = action.payload;

      state.value = delItem(state.value, item);
      localStorage.setItem('cart_items', JSON.stringify(sortItem(state.value)));
    },
  },
});

const { actions, reducer } = cartItemsSlice;

export const { addItem, updateItem, removeItem } = actions;

export default reducer;
