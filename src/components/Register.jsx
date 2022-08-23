import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import  {toast} from 'react-toastify'
function Register() {
    const navigate =useNavigate()
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    

    const validatePassword = () => {
        let isValid = true
        if (password !== '' && confirmPassword !== ''){
          if (password !== confirmPassword) {
            isValid = false
            toast.error('Passwords does not match')
          }
        }
        return isValid
      }

    const register = (e) => {
        e.preventDefault()
        if (validatePassword()) {
            auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => { 
                if(auth) navigate('/')
            })
            .catch(error=>toast.error('Something get wrong :('))
                
       }
    }
    
  return (
      <div className='login'>
          <Link to='/'>
          <img className='loginLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png" alt="" />
          </Link>

          <div className="loginContainer">
              <h1>Register</h1>
              
              <form>
                  <h5>E-mail</h5>
                  <input type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='E-mail...'
                  />

                  <h5>Password</h5>
                  <input type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Password...'
                  />
                  <h5>Confirm password</h5>
                  <input type="password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    placeholder='Confirm password...'
                  />
                  <p>
                  By singing-in you agree to AmazonCLONE Conditions of  Use&Sale. Please see our privacy notice, our cookies notice and our interest based ads notice.
                </p>
                  <button  type='submit' onClick={register} className='loginSignInButton'>Create your Amazon account</button>
              </form>
              
          </div>

    </div>
  )
}

export default Register