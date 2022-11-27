// Write your JS code here
import {useState} from 'react'
import './index.css'

const LoginForm = props => {
  const [state, setState] = useState({username: '', password: '', error: false})
  const {username, password, error} = state

  const changeUsername = event => {
    setState({username: event.target.value})
  }

  const changePassword = event => {
    setState({password: event.target.value})
  }

  const onsubmitSuccess = () => {
    const {history} = props
    history.replace('/')
  }

  const errMsg = "*Username and Password didn't match"

  const submitForm = async event => {
    event.preventDefault()
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    console.log(options)
    const response = await fetch(url, options)
    console.log(response)
    if (response.ok === true) {
      onsubmitSuccess()
    } else {
      setState({error: true})
    }
  }
  return (
    <div className="login-con">
      <div className="login-img">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-icon"
          alt="website login"
        />
      </div>
      <form className="form-con" onSubmit={submitForm}>
        <div className="logo-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="logo-icon"
            alt="website logo"
          />
        </div>
        <div className="val-con">
          <label className="label-ele" htmlFor="username">
            {' '}
            Username
          </label>
          <input
            type="text"
            className="inp-ele"
            id="username"
            placeholder="username"
            value={username}
            onChange={changeUsername}
          />
        </div>
        <div className="val-con">
          <label className="label-ele" htmlFor="password">
            {' '}
            Password
          </label>
          <input
            type="password"
            className="inp-ele"
            id="password"
            placeholder="password"
            value={password}
            onChange={changePassword}
          />
        </div>

        <button className="login-btn" type="submit">
          Login
        </button>
        <p>{error === true ? errMsg : ''}</p>
      </form>
    </div>
  )
}
export default LoginForm
