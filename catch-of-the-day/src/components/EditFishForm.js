import React from "react";

class EditFishForm extends React.Component {
  handleChange = (event) => {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value,
    };

    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    const imgStyle = (imgSrc) => ({ backgroundImage: `url(${imgSrc})` });

    return (
      <li className="menu-fish">
        <figure className="edit_image" style={imgStyle(this.props.fish.image)}>
          <input
            type="text"
            onChange={this.handleChange}
            name="image"
            value={this.props.fish.image}
          />
        </figure>
        <div className="form-details">
          {/* <div className="name-and-price"> */}
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.props.fish.name}
            className="item-name"
          />
          <span className="price">
            <input
              type="text"
              name="price"
              onChange={this.handleChange}
              value={this.props.fish.price}
              className="price"
            />{" "}
          </span>
        </div>
        <select
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        {/* </div> */}
        {/* <p> */}
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        ></textarea>
        {/* </p> */}
        {/* end template */}

        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove
        </button>
      </li>
    );
  }
}
export default EditFishForm;
