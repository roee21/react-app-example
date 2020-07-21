import React from "react";

const login = (props) => (
  <nav className="login">
    <h2>HI login</h2>
    <p> Login to manage Inventory</p>
    <button className="github" onClick={() => props.authenticate("Github")}>
      Login wuth Guthub
    </button>
  </nav>
);

export default login;
