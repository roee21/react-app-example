import React from "react";
import { formatPrice } from "../helpers";
class Order extends React.Component {
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";

    if (!fish) return null;
    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry {fish ? fish.name : "fish"} is no longer available
        </li>
      );
    }
    return (


      <li key={key}>

        <img src={fish.image} alt={fish.name} className="cart-item-img" />
        

        
        <div className="cart-item-details">
          <h2>
            <strong>{fish.name}</strong>
          </h2>
          <h3>Quantity — {count} lbs</h3>
          <h3>total — {formatPrice(count * fish.price)}</h3>
          {/* {count} lbs {fish.name} {formatPrice(count * fish.price)} */}
        </div>
        <button
          className="close_btn"
          onClick={() => this.props.removeFromOrder(key)}
        >
          &times;
        </button>
      </li>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Cart</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          Total — &nbsp; <strong>{formatPrice(total)}</strong>&nbsp;(go to
          checkout)
        </div>
      </div>
    );
  }
}
export default Order;
