import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import universe from '../icons/universe.jpg';
import '../sass/_login.scss';
import '../sass/_login_mobile.scss';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <img src={universe} alt="Universe" className="login__photo" />
      <form>
        <h1>Log in</h1>
        <div className="form--inputs">
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
          <div className="row-box">
            <div className="remember">
              <input type="checkbox" id="remember" name="remember" value="Remember" />
              <label for="remember">Remember Me</label>
            </div>
            <a href="/" className="link">Forgot Password?</a>
          </div>
          <div className="row-box">
            <a href="/" className="btn btn--cancel">CANCEL</a>
            <NavLink className="btn btn--submit" to="/main-page"> LOGIN </NavLink>
          </div>
          <div className="row-box account">
            <span>Don't have an account yet?</span>
            <a href="/sign-up" className="link">Sign Up here</a>
          </div>
        </div>
      </form>
    </div>
  )
}