import { useNavigate } from 'react-router-dom'
import './login.css'

export default function Login() {

  let navigate = useNavigate()

  return (
    <div className="center">
      <h1>Login</h1>
      <form method="post">
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input type="submit" value="Login" />
        {/* <input type="submit" value="cancel" /> */}
        <div className="signup_link">
          Not a  member? <a onClick={()=>navigate('/register')}>register</a> 
        </div>
      </form>
    </div>
  )
}
