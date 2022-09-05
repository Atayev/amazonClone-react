import React from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from './reducer'
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import { useNavigate } from 'react-router-dom'

function Product({ id,category, title, image, price, rating }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const addTo = () => {
    dispatch(
      
      addToBasket(
        {
          basket: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating
        }
    }))
  }
  return (
    <div className="product">
      <div className="productInfo" onClick={()=>navigate(`/product-item/${id}`)}>
        <p className='productCategory'>{ category }</p>
      <p>{title}</p>
      <p className="productPrice">
        <small>$</small>
        <strong>{price}</strong>
      </p>
        <div className="productRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
             <StarRateOutlinedIcon key={i}/>
          ))}
        
      </div>
    </div>

    <img src={image} alt="" />

    <button onClick={()=>addTo()}>Add to Card</button>
  </div>)
}

export default Product