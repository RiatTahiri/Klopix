import React, { useEffect, useState } from "react";
import axios from "axios";
// import Auth from "./Auth";

// Auth.getToken();

const api = axios.create({
  baseURL: "http://localhost:4000/user/",
});

function HomePage() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    api
      .get("homepage", {
        method: "GET",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          // "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log(response);
        setRes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    // {Auth.getToken() ? console.log('got it') : console.log('false')}
    <div>
      <h1>{res}</h1>
    </div>
  );
}

export default HomePage;
