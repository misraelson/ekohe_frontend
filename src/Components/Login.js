import React, { useState } from 'react';
import universe from '../icons/universe.jpg';
import '../sass/_login.scss';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <img src={universe} alt="Universe" className="login__photo" />
      <form className="login__form">
        <h1>Login</h1>
        <div className="login--inputs">
          <h2>EMAIL ADDRESS</h2>
          <input          
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
            type="email"
            name="email"
            required
          />
          <h2>PASSWORD</h2>
          <input
            value={password}
            onChange={ (e) => setPassword(e.target.value) }
            type="password"
            name="password"
            required
          />
          <input type="checkbox" name="remember" value="Remember" />REMEMBER ME
          <a href="/" className="link">Forgot Password?</a>
        </div>
        <a href="/" className="btn btn--cancel">CANCEL</a>
        <input className="Submit-button" type="submit" value="LOGIN" />
        <span>Don't have an account yet?</span>
        <a href="/sign-up" className="link">Sign Up here</a>
      </form>
    </div>
  )
}