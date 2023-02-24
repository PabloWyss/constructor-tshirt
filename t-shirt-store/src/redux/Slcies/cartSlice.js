import { createSlice} from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList : {},
        sum : []
    },
    reducers: {
        addToCart : (state,action) => {
            if(action.payload.name in state.cartList){
                state.cartList[action.payload.name].count += 1 
            } else {
                let newObkect = {
                    price : action.payload.price,
                    count : 1
                }
                state.cartList[action.payload.name] = newObkect
            }
        },
        addItem : (state,action) => {
            state.cartList[action.payload].count +=1
        },
        removeItem : (state,action) => {
            if (state.cartList[action.payload].count > 0){
                state.cartList[action.payload].count -=1
            }
        },
        removeItemFromList : (state,action) => {
            delete state.cartList[action.payload]
        }
    } 
})
export const { addToCart, addItem, setSum, removeItem, removeItemFromList  } = cartSlice.actions;
export default cartSlice.reducer;
