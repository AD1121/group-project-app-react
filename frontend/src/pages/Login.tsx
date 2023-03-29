import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'

type LoginFormProps = {
  onLogin: (token: string) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUserName] = useState("")
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
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      onLogin(data.accessToken)

      console.log(data.token);
      
      localStorage.setItem("accessToken", data.token)

      if (data.token) {
        navigate('/userspage')
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
