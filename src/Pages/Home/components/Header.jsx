import React from "react";
import "../../../Style/Header.css"
import { useNavigate } from "react-router-dom";

const Header = ({ searchTerm, setSearchTerm }) => {
  const navigation = useNavigate()
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    if(window.location.pathname !== '/') 
    {
      navigation('/')
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <nav>
      <div className="tvlogo"> TV MAZE </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
      </div>
    </nav>
  );
};

export default Header;
