import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slcies/userSlice";
import cartReducer from "./Slcies/cartSlice"
import sumReducer from "./Slcies/sumSlice"

export default configureStore({
    reducer: {
        user : userReducer,
        cart : cartReducer,
        sum : sumReducer
    }
})
