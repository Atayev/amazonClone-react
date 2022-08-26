import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import {setUser} from './reducer'

function Header() {
   
    const state = useSelector(state => state.basket)
    const dispatch = useDispatch()
    
  const logout = () => {
    dispatch(
      setUser({
        user:null
      }))
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
        {!state.user ?
          ( 
            <Link to='/login'>
            <div className="header-option">
              <span className="header-fline">Hello Guest</span>
              <span className="header-sline">Sign IN</span>
            </div>
            </Link>
          ) :
          (
            <div className="header-option">
              <span className="header-fline">Hello {!state.user ? 'Guest' : state.user.email}</span>
              <span onClick={logout} className="header-sline">Sign Out</span>
            </div>
          )
        }
                <div className="header-option">
                    <span className="header-fline">Returns</span>
                        <span className="header-sline">Orders</span>
                    </div>
                <div className="header-option">
                <span className="header-fline">Yourt</span>
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