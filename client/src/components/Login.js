import React, { useState } from "react";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";

import "./styles/Login.css";

const api = axios.create({
  baseURL: "http://localhost:4000/user/",
});
const Login = () => {
  const [serverResponse, setServerResponse] = useState([]);
  const [logInemail, setLogInEmail] = useState("");
  const [logInpassword, setLogInPassword] = useState("");

  const history = useHistory();

  // const getToken = async () => {
  //   return localStorage.getItem("x-access-token");
  // };

  // const setToken = async (token) => {
  //   localStorage.setItem("x-access-token", token);

  //   return token;
  // };

  // const getUser = async () => {
  //   const token = getToken();

  //   if (token) console.log(token);
  //   else console.log("not token");
  // };

  const login = async (e) => {
    e.preventDefault();

    const res = await api
      .post(
        "/login",
        { logInemail, logInpassword },
        {
          method: "POST",
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "*",
          },
        }
        // { withCredentials: true }
      )
      .then((response) => {
        const { token } = response.data;

        setServerResponse([response.data.message]);
        // setToken(token);

        console.log(response);
        history.push("homepage");
        // history.push("homepage");
      })
      .catch((error) => {
        console.log(error);
        setServerResponse([error]);
      });
  };

  const logOut = async (e) => {
    e.preventDefault();

    const res = await api
      .get("/signout")
      .then((response) => {
        setServerResponse(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        setServerResponse(error.response.data);
      });
  };

  return (
    <div id="login_div">
      <h2 className="login_title">Login</h2>
      <form>
        <input
          className="login_inputs"
          type="email"
          placeholder="Email"
          onChange={(e) => setLogInEmail(e.target.value)}
          value={logInemail}
        ></input>
        <br />
        <input
          className="login_inputs"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setLogInPassword(e.target.value);
          }}
          value={logInpassword}
        ></input>
        <br />
        <button onClick={login} className="login_button">
          Login
        </button>
      </form>
      <button onClick={logOut} className="logout_button">
        Log Out
      </button>

      <div id="response_messages">
        <strong className="error-messages">
          {serverResponse === "" ? "" : JSON.stringify(serverResponse)}
        </strong>
      </div>
    </div>
  );
};

export default Login;
