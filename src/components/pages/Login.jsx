import React from "react";
import "../../styles.css";

function Login() {
  return (
    <div id="login-form-wrap">
      <h2>Login</h2>
      <form id="login-form">
        <p>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required
          />
          <i className="validation">
            <span></span>
            <span></span>
          </i>
        </p>
        <p>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <i className="validation">
            <span></span>
            <span></span>
          </i>
        </p>
        <p>
          <input type="submit" id="login" value="Login" />
        </p>
      </form>
      <div id="create-account-wrap">
        <p>
          Not a member? <a href="#">Create Account</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
