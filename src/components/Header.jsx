import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useSelector,useDispatch } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom'
import { auth } from '../firebase';
import { setUser } from './reducer'
import {toast} from 'react-toastify'
function Header() {
   
    const state = useSelector(state => state.basket)
    const dispatch = useDispatch()
    const navigate = useNavigate()
  const logout = () => {
    auth.signOut()
    dispatch( 
      setUser({
        user:null
      }))
    toast.success('Successfully signed out')
  } 
  return (
    <div className="header">
          <Link to='/'>
          <img 
            className="header-logo"
                  src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="" />
          </Link>
            <div className="header-search">
                <input type="text" className="header-searchIn" />
                <SearchIcon className='header-searchIcon'/>
            </div>
            <div className="header-nav">
            <Link to={!state.user ? '/login' : '/'}>
            <div className="header-option">
              <span className="header-fline">Hello {!state.user ? 'Guest' : state.user.email }</span>
              <span className="header-sline" onClick={!state.user ? null : logout}>{!state.user ? 'Sign In' : 'Sign Out' }</span>
            </div>
            </Link>
                <div className="header-option">
          <span className="header-fline">Returns</span>
          <Link to='/orders' style={{ textDecoration: 'none', color: 'white', padding: 0, margin: 0}}>
                <span className="header-sline">Orders</span>
                </Link>
                    </div>
                <div className="header-option">
                    <span className="header-fline">Your</span>
                    <span className="header-sline">Prime</span>
                </div>
          </div>
          <Link to='/checkout'>
          <div className="header-basket">
              <ShoppingBasketIcon />
              <span className='header-sline header-basketC'>{state?.basket.length}</span>
              </div>
              </Link>
    </div>
  )
}

export default Header