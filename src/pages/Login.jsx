import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  if (localStorage?.getItem("user")) {
    navigate("/");
  }
  const [userName, setUserName] = useState("");
  function login() {
    console.log("Welcome, ", userName);
    localStorage.setItem("user", JSON.stringify(userName));
    navigate("/");
  }
  return (
    <div className="login-form">
      <p className="login-title">Login</p>
      <div className="login-details">
        <p>Please Enter Your Name:</p>
        <input
          autoFocus="true"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className="login-button" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}
