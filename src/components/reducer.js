import { createSlice } from '@reduxjs/toolkit';
  
export const basketSlice = createSlice({
    name: 'basket',
    initialState: [
    ],
    reducers: {
        addToBasket: (state, action) => {
            const basketItem = {
                id:action.payload.basket.id,
                title:action.payload.basket.title,
                image:action.payload.basket.image,
                price:action.payload.basket.price,
                rating:action.payload.basket.rating
            }
             state.push(basketItem)
        },
        removeFromBasket: (state, action) => {
            let index=state.findIndex(item=> item.id===action.payload.id)
            state.splice(index,1)
        },
        // setUser: (state, action) => {
            
        // }
    }
});

export  const {addToBasket,removeFromBasket,setUser} = basketSlice.actions
export default basketSlice.reducer;