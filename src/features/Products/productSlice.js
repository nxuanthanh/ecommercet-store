const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    value: null
}

const productModalSlice = createSlice({
    name: 'productModal',
    initialState,
    reducers: {
        add: (state, action) => {
            state.value = action.payload;
        },

        remove: (state) => {
            state.value = null;
        }
    }
})

const { actions, reducer } = productModalSlice

export const { add, remove } = actions

export default reducer