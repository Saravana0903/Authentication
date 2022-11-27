// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-con">
    <Header />
    <div className="main-con">
      <div className="matter-con">
        <h1 className="main-head">Clothes That get You Noticed</h1>
        <p className="main-des">HI</p>
        <button type="button"> Shop now </button>
      </div>
      <div className="img-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          className="home-icon"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  </div>
)
export default Home
