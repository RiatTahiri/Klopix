import React, { useState } from "react";
import axios from "axios";

import "./styles/LoginRegisterStyle.css";

const api = axios.create({
  baseURL: "http://localhost:4000/user/",
});

const LoginRegisterLayout = () => {
  // Register State
  const [nameReg, setNameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [response, setResponse] = useState("");

  const register = async (e) => {
    e.preventDefault();
    await api
      .post("/register", {
        name: nameReg,
        email: emailReg,
        password: passwordReg,
        profile_picture: "default.jpg",
      })
      .then((res) => {
        console.log(res);
        setResponse(res);
      })
      .catch((err) => {
        setResponse(err);
      });
  };

  const login = async (e) => {
    e.preventDefault();

    console.log(email, password);

    const data = {
      email: email,
      password: password,
    };

    const res = await api
      .post("/login", data)
      .then((res) => {
        console.log(res.data);
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err.res);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div id="main">
      <h3>Klopix</h3>
      <div className="login_div">
        <h4>Login</h4>
        <form>
          <br />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          ></input>
          <br />
          <button onClick={login}>Login</button>
        </form>
        <h4>{response}</h4>
      </div>
      <div className="register_div">
        <h4>Register</h4>
        <form>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setNameReg(e.target.value)}
          ></input>
          <br />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmailReg(e.target.value)}
          ></input>
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPasswordReg(e.target.value)}
          ></input>
          <br />
          <button onClick={register}>Register</button>
          {/* <h4>{response}</h4> */}
        </form>
      </div>
    </div>
  );
};

export default LoginRegisterLayout;
