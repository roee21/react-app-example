import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  };

  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";
    console.log(isAvailable);

    const imgStyle = (imgSrc) => ({ backgroundImage: `url(${imgSrc})` });

    return (
      <li className="menu-fish">
        {/* <img src={image} alt={name} /> */}

        <figure style={imgStyle(image)}></figure>

        <h3 className="fish-name">
          {name}
          <span className="price"> {formatPrice(price)} </span>
        </h3>
        <p>{desc}</p>
        <button
          // className="add-to-cart"
          disabled={!isAvailable}
          onClick={this.handleClick}
        >
          <p>
            <strong>{isAvailable ? "(add to cart)" : "(sold out)"}</strong>
          </p>
        </button>
      </li>
    );
  }
}

export default Fish;
