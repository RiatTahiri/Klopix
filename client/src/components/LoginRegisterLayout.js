import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link, Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';

import "./styles/LoginRegisterStyle.css";
import HomePage from "./HomePage.js";

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

  const [serverResponse, setServerResponse] = useState([]);
  const history = useHistory();

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
        setServerResponse(res);
      })
      .catch((err) => {
        setServerResponse(err);
      });
  };

  const login = async (e) => {
    e.preventDefault();

    console.log(email, password);

      const res = await api
        .post("/login", {email, password}, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          localStorage.setItem('AUTH_TOKEN', response.data.token);

          console.log(response.data);
          console.log(typeof response.data);
          setServerResponse([response.data]);
        })
        .catch((error) => {
            console.log(error.response.data);
            setServerResponse(error.response.data)
        });
  };

  const logOut = async (e) => {
    e.preventDefault();

    const res = await api.get('/signout').then((res) => {
      setServerResponse(res.data);
      console.log(res.data);
    })
  }

  return (
    <div id="main">
      <h1>Klopix</h1>
      <div className="login_div">
        <h2>Login</h2>
        <form>
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
          <button onClick={login} className='login_button'>Login</button>
        </form>
      </div>
      <button onClick={logOut}>Log Out</button>
      <div className="register_div">
        <h2>Register</h2>
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
          <button onClick={register} className='register_button'>Register</button>
          {/* <h4>{response}</h4> */}
        </form>
      </div>

      <div id='response_messages'>
        {/* <div>{serverResponse.map((res,i) => <li key={i}>{res}</li>)}</div> */}
        <strong className='error-messages'>{serverResponse}</strong>      
      </div>
    </div>
  );
};

export default LoginRegisterLayout;
