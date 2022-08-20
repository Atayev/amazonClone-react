import { useSelector } from 'react-redux'

function Subtotal() {
  const basketItems = useSelector(state => state.basket)
  
  
  return (
      <div className='subtotal'>
          <>
        <p>Subtotal ({basketItems.length} items) :
          <strong>$
            {basketItems.reduce((total, item) => Math.round((total + Number(item.price)) * 100) / 100, 0)}</strong></p>
              <small className='subtotalGift'>
                  <input type="checkbox" />
                  This order contains a gift
              </small>
          </>
          <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal