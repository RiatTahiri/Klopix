import React, { useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/user/",
});

const Register = () => {
  const [serverResponse, setServerResponse] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const getToken = async () => {
    return localStorage.getItem("token");
  };

  const setToken = async (token) => {
    localStorage.setItem("token", token);

    return token;
  };

  const getUser = async () => {
    const token = getToken();

    if (token) console.log(token);
    else console.log("not token");
  };

  const register = async (e) => {
    e.preventDefault();

    const profile_picture = "default.jpg";

    const res = await api
      .post(
        "/register",
        { name, password, email, profile_picture },
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setServerResponse([response.data]);
      })
      .catch((error) => {
        console.log(error.response.data);
        setServerResponse(error.response.data);
      });
  };

  return (
    <div id="register_div">
      <h2>Register</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        <button onClick={register} className="register_button">
          Register
        </button>
        {/* <h4>{response}</h4> */}
      </form>

      <div id="response_messages">
        <strong className="error-messages">
          {serverResponse === "" ? "" : JSON.stringify(serverResponse)}
        </strong>
      </div>
    </div>
  );
};

export default Register;
