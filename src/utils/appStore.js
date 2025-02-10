import { configureStore } from "@reduxjs/toolkit";
import myCartReducer from './cartSlice'

const appStore = configureStore({
    reducer: {
        cart: myCartReducer
    }
})

export default appStore