import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getBasketTotal } from "./reducer";
function Subtotal() {
  const state = useSelector(state => state.basket)
  const navigate = useNavigate()
  
  return (
      <div className='subtotal'>
          <>
        <p>Subtotal ({state.basket.length} items) :
          <strong>$
            {getBasketTotal(state.basket)}</strong></p>
              <small className='subtotalGift'>
                  <input type="checkbox" />
                  This order contains a gift
              </small>
          </>
          <button onClick={e=>navigate('/payment')}>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal