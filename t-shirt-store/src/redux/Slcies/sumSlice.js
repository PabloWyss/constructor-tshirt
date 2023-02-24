import { createSlice} from "@reduxjs/toolkit";


export const sumSlice = createSlice({
    name: "sum",
    initialState: {
        sum : []
    },
    reducers: {
        
        setSum : (state,action) => {
            state.sum += action.payload
        }
    } 
})
export const { setSum } = sumSlice.actions;
export default sumSlice.reducer;
