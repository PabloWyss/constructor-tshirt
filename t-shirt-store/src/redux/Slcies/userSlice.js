import { createSlice} from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo : {},
    },
    reducers: {
        addUserInfo : (state,action) => {
            state.userInfo["user"]=action.payload
            console.log(current(state.userInfo))
        }
        
    } 
})
export const { addUserInfo  } = userSlice.actions;
export default userSlice.reducer;
