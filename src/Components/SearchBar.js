import React, {useState} from "react";
import '../App.css'
import SearchIcon from "@material-ui/icons/Search";



export default function SearchBar(props) {
  return (
    <div className="InputContainer">
      <input onChange={e => {props.handleSearch(e.target.value)}} style={{height: 33, width: "80%", bottom: -3, position: "relative"}} className="Input"></input>
      <SearchIcon style={{color:"#B49B84"}}></SearchIcon>
    </div>

  );
}