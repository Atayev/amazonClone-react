import { createSlice } from '@reduxjs/toolkit';



export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => Number(item.price) + amount, 0);
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
        emptyBasket: (state, action) => {
            return {
                ...state,
                basket:action.payload
            }
        },
        removeFromBasket: (state, action) => {
            let index=state.basket.findIndex(item=> item.id===action.payload.id)
            state.basket.splice(index,1)
        },
        setUser: (state, action) => {
            state.user = (action.payload.user)
        }
    },
    
});

export  const {addToBasket,removeFromBasket,setUser,emptyBasket} = basketSlice.actions
export default basketSlice.reducer;