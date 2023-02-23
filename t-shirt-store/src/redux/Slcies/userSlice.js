import { createSlice} from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo : {},
    },
    reducers: {
        addUserInfo : (state,action) => {
            state.userInfo["user"]=action.payload
        }
    } 
})
export const { addUserInfo  } = userSlice.actions;
export default userSlice.reducer;
