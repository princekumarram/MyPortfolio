import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../../actions/user';
// import { useAlert } from 'react-alert';
import loginStyle from "../Login/loginStyle.css"

const Login = () => {

  /*
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const alert = useAlert();

  // Access login state from Redux store
  const { loading, message, error } = useSelector((state) => state.login);

  // Form submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  // Handle error and success messages using useEffect
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: 'CLEAR_ERRORS' });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: 'CLEAR_MESSAGE' });
    }
  }, [alert, error, message, dispatch]);
*/
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="brand">Sneat</h1>
        <h2>Welcome to Sneat! 👋</h2>
        <p>Please sign in to your account and start the adventure</p>

        <form /*onSubmit={submitHandler}*/>
          <div className="input-group">
            <label htmlFor="email">Email or Username</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email or username"
              /*
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}*/
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              /*
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}*/
            />
            <a href="/forgot-password" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>

          <button
            type="submit"
            className="sign-in-btn"
            // disabled={loading}
          >
            {/* {loading ? 
            'Signing in...' : 'Sign in'} */}
             
             Sign in
          </button>
        </form>

        <div className="create-account">
          <p>New on our platform? <a href="/register">Create an account</a></p>
        </div>

        <div className="social-login">
          <p>or</p>
          <div className="social-icons">
            <button className="social-btn google">G</button>
            <button className="social-btn facebook">F</button>
            <button className="social-btn twitter">T</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
