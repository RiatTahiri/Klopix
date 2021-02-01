import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Button, TextField, makeStyles } from "@material-ui/core/";

import "../styles/Login.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      padding: theme.spacing(0.2),
      width: 200,
    },
  },
}));

const api = axios.create({
  baseURL: "http://localhost:4000/user/",
});

const Login = () => {
  const [serverResponse, setServerResponse] = useState("");
  const [logInemail, setLogInEmail] = useState("");
  const [logInpassword, setLogInPassword] = useState("");

  const classes = useStyles();

  const history = useHistory();

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
        // const { token } = response.data;

        setServerResponse(response.data.message);
        // setToken(token);

        console.log(response);
        history.push("profile");
        // history.push("homepage");
      })
      .catch((error) => {
        console.log(error);
        setServerResponse(error.message);
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
    <div id="Login">
      <h2 className="login_title">Login</h2>
      <form className={classes.root}>
        <TextField
          type="email"
          variant="standard"
          label="Email"
          onChange={(e) => {
            setLogInEmail(e.target.value);
          }}
          size="medium"
          className="text_fields"
          value={logInemail}
        ></TextField>
        <br />
        <TextField
          type="password"
          variant="standard"
          label="Password"
          onChange={(e) => {
            setLogInPassword(e.target.value);
          }}
          className="text_fields"
          value={logInpassword}
        ></TextField>
        <br />
        <Button onClick={login} variant="contained" color="primary">
          Login
        </Button>
      </form>

      <Button onClick={logOut} variant="contained" color="secondary">
        Log Out
      </Button>

      <div id="response_messages">
        <strong className="error-messages">
          {serverResponse === "" ? "" : JSON.stringify(serverResponse)}
        </strong>
      </div>
    </div>
  );
};

export default Login;
