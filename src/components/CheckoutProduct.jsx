import React from 'react'
import { removeFromBasket } from './reducer'
import { useDispatch } from 'react-redux'


function CheckoutProduct({ id, title, image, price, rating }) {
 
    const dispatch = useDispatch()
    const removeFrom = () => {
        
        dispatch(
            removeFromBasket({
                id: id,
                title: title,
                image: image,
                price: JSON.stringify(price),
                rating: JSON.stringify(rating)
                }
            )
        )
        
   }
    return (
        <div className='checkoutProduct'>
            <img className="checkoutProductImage"src={image} alt="" />
            <div className="checkoutProductInfo">
                <p className="checkoutProductTitle">{title}</p>
                <p className="checkoutProductPrice">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProductRating">
                    {Array(rating)
                        .fill()
                        .map((_,key) => (
                            <p key={key}>*</p>
                        ))}
                </div>
                <button onClick={removeFrom}>Remove from basket</button>
            </div>
            </div>
    )
}

export default CheckoutProduct