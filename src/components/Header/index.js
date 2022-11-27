// Write your JS code here
import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = props => {
  const {history} = props
  const logoutBtn = () => {
    history.replace('/login')
  }

  return (
    <nav className="nav-con">
      <div className="in-nav-con">
        <div className="logo-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="logo"
            alt="website logo"
          />
        </div>
        <div className="nav-link-con">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/products" className="nav-link">
            Products
          </Link>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
          <Link to="/login" className="nav-link">
            <button type="submit" className="logout-btn" onClick={logoutBtn}>
              Logout
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
export default withRouter(Header)
