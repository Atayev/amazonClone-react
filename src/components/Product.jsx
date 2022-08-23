import React from 'react'
import { useDispatch } from 'react-redux'
import {addToBasket} from './reducer'
function Product({ id, title, image, price, rating }) {
  
  const dispatch = useDispatch()

  const addTo = () => {
    dispatch(
      
      addToBasket(
        {
          basket: {
            id: id,
            title: title,
            image: image,
            price: JSON.stringify(price),
            rating: JSON.stringify(rating)
        }
    }))
  }
  return (
    <div className="product">
    <div className="productInfo">
      <p>{title}</p>
      <p className="productPrice">
        <small>$</small>
        <strong>{price}</strong>
      </p>
        <div className="productRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
             <p key={i}>*</p>
          ))}
        
      </div>
    </div>

    <img src={image} alt="" />

    <button onClick={()=>addTo()}>Add to Basket</button>
  </div>)
}

export default Product