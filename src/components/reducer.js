import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
    name: 'basket',
    initialState:[],
	reducers: {
        addToBasket: (state, action) => {
            console.log(action)
            const basketItem = {
                id:action.payload.id,
                title:action.payload.title,
                image:action.payload.image,
                price:action.payload.price,
                rating:action.payload.rating
            }
            state.push(basketItem)
        },
        removeFromBasket: (state, action) => {
            const basketItem = {
                id:action.payload.id,
            }
            state.pop(basketItem)
		},

	},
});

export  const {addToBasket,removeFromBasket} = basketSlice.actions
export default basketSlice.reducer;