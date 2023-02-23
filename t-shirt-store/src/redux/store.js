import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slcies/userSlice";

export default configureStore({
    reducer: {
        user : userReducer
    }
})
