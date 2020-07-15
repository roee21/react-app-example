import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    // 1. stop the form from submiting
    event.preventDefault();

    // 2. Get the text from the input
    const storeName = this.myInput.current.value;

    // 3. change the page to /store-what-ever
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please fill the stuff</h2>
        <input
          type="text"
          required
          placeholder="yo yo yo"
          defaultValue={getFunName()}
          ref={this.myInput}
        />
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default StorePicker;
