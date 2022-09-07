import React, { useEffect, useState } from 'react'
import { getBasketTotal } from "./reducer";
import { useSelector, useDispatch } from 'react-redux';
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import {db} from '../firebase'
import {emptyBasket} from '../components/reducer'
import axios from '../axios'
function Payment() {
    const state = useSelector(state => state.basket)
    console.log(state.basket)
    const stripe = useStripe()
    const elements = useElements()
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const [disabled,setDisabled]=useState(true)
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState('')
    const [clientSecret, setClientSecret] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url:`payments/create?total=${getBasketTotal(state.basket)*100}`
            })
            setClientSecret(response.data.clientSecret)
        }   
        getClientSecret()
    }, [state.basket])

    const handleSubmit = async(event) => {
        event.preventDefault()
        setProcessing(true)
        console.log(clientSecret)
        // eslint-disable-next-line
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card:elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            console.log(paymentIntent.id,paymentIntent.amount)
            db.collection('users')
                .doc(state.user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: state.basket,
                    amount: paymentIntent.amount,
                    created:paymentIntent.created
                })
            dispatch(
                emptyBasket({
                    basket:[]
                })
            )
            setSucceeded(true)
            setError(null)
            setProcessing(false)
            navigate("/orders", { replace: true });
        })
    }
    const handleChange = event => {
        setDisabled(event.empty)
        setError(event.error ? event.error.message : '')
    }
  return (
      <div className='payment'>
          <div className="paymentContainer">
              <h1>
                  Checkout (
                  <Link to='/checkout'>{state.basket?.length} items</Link>
                  )
              </h1>
              <div className="paymentSection">
                  <div className="paymentTitle">
                      <h3>Delivery Address: </h3>
                  </div>
                  <div className="paymentAddress">
                      <p>{state.user?.email}</p>
                      <p>Adress 1</p>
                      <p>Adress 2</p>
                  </div>
              </div>
              <div className="paymentSection">
                  <div className="paymentTitle">
                      <h3>Review items and delivery :</h3>
                  </div>
                  <div className="paymentItems">
                        {state.basket.map((item, key) => {
                            return <CheckoutProduct
                                id= {item.id}
                                title={item.title}
                                image={item.image}
                                price={Number(item.price)}
                                rating={Number(item.rating)}
                                key={key}
                            />
                        })}
                  </div>
              </div>
              <div className="paymentSection">
                <div className="paymentTitle">
                    <h3>Review items and delivery :</h3>
                </div>
                <div className="paymentDetails">
                      <form onSubmit={handleSubmit}>
                          <CardElement onChange={handleChange} />
                          <div className='paymentPriceContainer'>
                          <strong>Order Total:
                                  ${getBasketTotal(state.basket)}</strong>
                              <button disabled={processing || disabled || succeeded}>
                                  <span>
                                      {processing ? <p>Processing</p> : "Buy Now"}
                                  </span>
                              </button>
                          </div>
                          {error && <div>{ error }</div>}
                    </form>
                </div>
          </div>
        </div>  
    </div>  
     )    
}

export default Payment