import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
function Subtotal() {
  const basketItems = useSelector(state => state.basket)
  const navigate = useNavigate()
  
  return (
      <div className='subtotal'>
          <>
        <p>Subtotal ({basketItems.basket.length} items) :
          <strong>$
            {basketItems.basket.reduce((total, item) => Math.round((total + Number(item.price)) * 100) / 100, 0)}</strong></p>
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