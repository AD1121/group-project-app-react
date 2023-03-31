import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'

type LoginFormProps = {
  onLogin: (token: string) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  let navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      });
      const data = await response.json()

      onLogin(data.accessToken)

      const users = data.name

      localStorage.setItem("accessToken", data.token)

      if (data.token) {
        navigate(`/userspage/${users}`)
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
  <div className="center">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="txt_field">
          <input 
          type="text" 
          required 
          onChange={e => setName(e.target.value)}/>
          <span></span>
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input 
          type="password" 
          required 
          onChange={e => setPassword(e.target.value)}/>
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input type="submit" value="Login" />
        <div className="signup_link">
          Not a member? <a onClick={()=>navigate('/register')}>register</a> 
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
