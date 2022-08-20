import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
    name: 'basket',
    initialState: [{
        basket:[],
        user:null,
    }],
    user:null,
    
	reducers: {
        addToBasket: (state, action) => {
            console.log(action)
            return state.push(action.payload)
            
        },
        removeFromBasket: (state, action) => {
                return state.basket.filter((basket) => basket.id !== action.payload.id);
        },
        setUser: (state, action) => {
            return state.user.push(action.payload.user)
        }
		},

	},
);

export  const {addToBasket,removeFromBasket,setUser} = basketSlice.actions
export default basketSlice.reducer;