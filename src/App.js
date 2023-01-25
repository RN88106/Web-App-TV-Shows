import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Header from "./Pages/Home/components/Header";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./Pages/Details/Details";

function App() {
  const [data, setdata] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
 

  const name = (q) => {

    axios
      .get(`http://api.tvmaze.com/search/shows?q=${q}`)
      .then((res) => {
        setdata(res.data);
        console.log(res.data)

      })
      .catch((err) => {
        console.log(err);
      });

  }


  useEffect(() => {
    if (!searchTerm) {
      return name("t")
    }

    name(searchTerm)
  }, [searchTerm]);
  return (
    <Router>
      <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <Routes>
        <Route path="/" element={<Home data={data} searchTerm={searchTerm} />} />
        <Route path="/Details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;