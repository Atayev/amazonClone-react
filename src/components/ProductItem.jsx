import React,{useState,useEffect} from 'react'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'
import {useParams} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToBasket } from './reducer'
function ProductItem() {
    const params = useParams()
    const [product, setProduct] = useState([])
    const dispatch = useDispatch()
    useEffect(()=> {
        const fetchListing = async ()=> {
            const docRef = doc(db,'products',params.productId)
            const docSnap = await getDoc(docRef)

            if(docSnap.exists() ) {
                setProduct({...docSnap.data(),id:docSnap.id})
            }
        }
        fetchListing()
    },[params.productId])

    const addTo = () => {
        dispatch(
          
          addToBasket(
            {
              basket: {
                id: product.id,
                title: product.name,
                image: product.imgUrls,
                price: product.price,
                rating:'5'
            }
        }))
      }
  return (
      <div className='productItem'>
          
          <img src={product.imgUrls} alt="" />
          <div className="productItemDetails">
          <p>Category:{ product.category }</p>
          <p>Name: { product.name }</p>
          <p>Price: ${ product.price }</p>
          </div>
          <button className='' onClick={()=>addTo()}>Add to Card</button>
      </div>
     )
}

export default ProductItem