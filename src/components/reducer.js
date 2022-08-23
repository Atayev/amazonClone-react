import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    basket: [],
    user:null,
}  
export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state= initialState, action) => {
            const basketItem = {
                id:action.payload.basket.id,
                title:action.payload.basket.title,
                image:action.payload.basket.image,
                price:action.payload.basket.price,
                rating:action.payload.basket.rating
            }
            state.basket.push(basketItem)
        },
        removeFromBasket: (state, action) => {
            let index=state.basket.findIndex(item=> item.id===action.payload.id)
            state.basket.splice(index,1)
        },
        setUser: (state, action) => {
            console.log(action.payload.user)
            return {
                ...state,
                user:action.payload.user
            }
        }
    }
});

export  const {addToBasket,removeFromBasket,setUser} = basketSlice.actions
export default basketSlice.reducer;