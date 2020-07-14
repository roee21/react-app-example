import React from "react";

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Please fill the stuff</h2>
        <input type="text" required placeholder="yo yo yo" />
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default StorePicker;
