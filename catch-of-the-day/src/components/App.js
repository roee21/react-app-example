import React from "react";
import Header from "./Header.js";
import Inventory from "./Inventory.js";
import Order from "./Order.js";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import { object } from "prop-types";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  componentDidMount() {
    const { params } = this.props.match;

    // first state our local storage
    const localStorageref = localStorage.getItem(params.storeid);

    if (localStorageref) {
      this.setState({
        order: JSON.parse(localStorageref),
      });
    }

    this.ref = base.syncState(`${params.storeid}/fishes`, {
      context: this,
      state: "fishes",
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeid,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = (fish) => {
    // console.log(fish);
    // 1. take a copy of existence state
    const fishes = { ...this.state.fishes };

    // 2. add our new fosh to that fish variable
    fishes[`fish${Date.now()}`] = fish;

    // 3. set the new fishes object into the state
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  updateFish = (key, updateFish) => {
    const fishes = { ...this.state.fishes };

    fishes[key] = updateFish;

    this.setState({ fishes });
  };

  deleteFish = (key) => {
    const fishes = { ...this.state.fishes };

    fishes[key] = null;

    this.setState({ fishes });
  };

  addToOrder = (key) => {
    const order = { ...this.state.order };

    order[key] = order[key] + 1 || 1;

    this.setState({ order });
  };

  removeFromOrder = (key) => {
    const order = { ...this.state.order };

    delete order[key];

    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="good good not bad" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
          fish={this.state.fishes}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          storeid={this.props.match.params.storeid}
        />
      </div>
    );
  }
}

export default App;
