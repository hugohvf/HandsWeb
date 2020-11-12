import React from "react";
import logo from "../resources/images/Hands.svg";
import "../App.css";
import SearchBar from "./SearchBar";

const Header = (props) => {
  return (
    <div className="HeaderContainer">
      <img alt="Logo" className="Logo" src={logo}></img>
      <SearchBar handleSearch={props.handleSearch} />
    </div>
  );
};

export default Header;
