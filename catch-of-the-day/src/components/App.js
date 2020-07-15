import React from "react";
import Header from "./Header.js";
import Inventory from "./Inventory.js";
import Order from "./Order.js";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  addFish = (fish) => {
    // console.log(fish);
    // 1. take a copy of existence state
    const fishes = {...this.state.fishes}
}
    // 2. add our new fosh to that fish variable
    fishes[`fish${Date.now()}`] = fish;

    // 3. set the new fishes object into the state
    this.setState({ fishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="good good not bad" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
