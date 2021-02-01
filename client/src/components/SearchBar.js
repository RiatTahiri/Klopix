import React, { useState } from "react";
import axios from "axios";

import "./styles/SearchBar.css";

const base = axios.create({
  baseURL: "http://localhost:4000/video/",
});

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);
    queryVideos();
  };

  const queryVideos = async () => {
    setLoading(true);

    const res = await base
      .get("search", { query }, { withCredentials: true })
      .then((data) => {
        setQuery(data.data);
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <input
      type="text"
      id="search_bar"
      name="search_bar"
      placeholder="Search"
      onChange={(e) => handleChange(e)}
      value={query}
    ></input>
  );
};

export default SearchBar;
