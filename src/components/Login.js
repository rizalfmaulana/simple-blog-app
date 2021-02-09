import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="auth-container">
      <div className="auth-card">
        <p className="auth-title">Login Page</p>
        <input
          className="input"
          placeholder="email"
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="input"
          placeholder="password"
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="btn">Login</button>
      </div>
    </div>
  );
}

export default Login;
