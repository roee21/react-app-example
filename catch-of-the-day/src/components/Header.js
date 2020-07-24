import React from "react";

const Header = (props) => (
  <header className="top">
    <input className="search large-text" placeholder="Search" />
    <button className="editBtn" onClick={props.editState}>
      {props.editing ? "(done)" : "(edit)"}
    </button>
  </header>
);

export default Header;
