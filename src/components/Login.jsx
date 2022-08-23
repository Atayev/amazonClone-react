import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import  {toast} from 'react-toastify'

function Login() {
    const navigate =useNavigate()
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const signIn = (e) => {
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                toast.success('Succsessfully signed in!')
                navigate('/')
            })
            .catch(error=> alert(error.message))
    }
    
  return (
      <div className='login'>
          <Link to='/'>
          <img className='loginLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png" alt="" />
          </Link>

          <div className="loginContainer">
              <h1>Sign in</h1>
              
              <form>
                  <h5>E-mail</h5>
                  <input type="text" value={email} onChange={ e=> setEmail(e.target.value)} />

                  <h5>Password</h5>
                  <input type="password" value={password} onChange={ e=> setPassword(e.target.value)}/>

                  <button  type='submit' onClick={signIn} className='loginSignInButton'>Sign In</button>
              </form>
              <p>
                  By singing-in you agree to AmazonCLONE Conditions of  Use&Sale. Please see our privacy notice, our cookies notice and our interest based ads notice.
              </p>
              <button onClick={()=>navigate('/register')} className='loginRegisButton'>Create your Amazon account</button>
          </div>

    </div>
  )
}

export default Login