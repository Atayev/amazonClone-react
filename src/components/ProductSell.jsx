import { useState,useEffect,useRef  } from "react"
import { db } from '../firebase' 
import {getAuth,onAuthStateChanged} from 'firebase/auth'
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from 'firebase/storage'
import {addDoc,collection,serverTimestamp} from 'firebase/firestore'
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'
import {useNavigate} from 'react-router-dom'

function ProductSell() {
    // eslint-disable-next-line
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        category:'',
        name: '',
        price: 0,   
        images:{}
    })
    const { category,name, price, images } = formData
    const auth = getAuth()
    const isMounted = useRef(true)
    const navigate = useNavigate()
    useEffect(() => {
        if (isMounted) {
          onAuthStateChanged(auth, (user) => {
            if (user) {
              setFormData({ ...formData, userRef: user.uid })
            } else {
              navigate('/sign-in')
            }
          })
        }
    
        return () => {
          isMounted.current = false
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [isMounted])



    const onSubmit = async(e) => {
        e.preventDefault()
        const storeImage = async (image) => {
            return new Promise((resolve,reject)=>{
                const storage = getStorage()
                const fileName =`${auth.currentUser.uid}-${image.name}-${uuidv4()}`
                const storageRef = ref(storage, 'images/' +fileName)
                console.log(image)
                const uploadTask = uploadBytesResumable(storageRef, image)
                uploadTask.on('state_changed', 
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                      break;    
                    }
                }, 
                (error) => {
                    reject(error)
                }, 
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        resolve(downloadURL)
                    });
                }
                );
            })
        }

        const imgUrls= await Promise.all(
            [...images].map((image)=>storeImage(image))
        ).catch(()=> {
            setLoading(false)
            toast.error('Images not uploaded')
            return
        })

        const formDataCopy = {
            ...formData,
            imgUrls,
            timestamp:serverTimestamp()
        }
        delete formDataCopy.images
        // eslint-disable-next-line
        const docRef = await addDoc(collection(db,'products'),formDataCopy)
                toast.success('Products added')
                navigate(`/product-item/${docRef.id}`)
    }
    const onMutate=(e)=>{
        let boolean = null
        if (e.target.value === 'true') {
            boolean=true
        }
        if (e.target.value === 'false') {
            boolean=false
        }

        if (e.target.files) {
            setFormData((prevState)=>({
                ...prevState,
                images:e.target.files
            }))
        }
        if (!e.target.files) {
            setFormData((prevState)=>({
                ...prevState,
                [e.target.id]: boolean ?? e.target.value
                
            }))
            
        }
    }   

  return (
      <div className='productSell'>
          <h3>Add information about your product</h3>
          <div className='productSellInfo'>
              <form onSubmit={onSubmit}>
                  <label className='productLabel'>Name of Product</label>
                  <input type="text" id="name" onChange={onMutate} value={ name } />
                  <label className='productLabel'>Price</label>
                  <input type="number" id="price" onChange={onMutate} value={price} />
                  <label className="productLabel">Category</label>
                  <input type="text" id="category" value={ category } onChange={onMutate} />
                  <label className='productLabel'>Product images</label>
                  <input type="file" id="images"
                        accept='.jpg,.png,.jpeg,.webp'
                        multiple
                        required
                        onChange={onMutate} />  
                  <button type='submit'>Sell My Product</button>
              </form>
          </div>
    </div>
  )
}

export default ProductSell