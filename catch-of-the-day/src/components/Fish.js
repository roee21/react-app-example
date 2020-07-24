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

        <div className="first-row">
          <h3>
            {name}
          </h3>
          <h2> {formatPrice(price)} </h2>
        </div>
        <p>{desc}</p>
        <button
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
