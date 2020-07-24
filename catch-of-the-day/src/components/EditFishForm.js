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
        <div className="first-row">
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.props.fish.name}
            className="item-name"
          />
            <input
              type="text"
              name="price"
              onChange={this.handleChange}
              value={this.props.fish.price}
              className="price"
            />
            <select
          className="opt"
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Available</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        </div>

        <textarea
          className="item-desc"
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        ></textarea>

        <div className="low-row">
        <button className="remove-item" onClick={() => this.props.deleteFish(this.props.index)}>
          <p><strong>
          (delete product)
          </strong>
          </p>

        </button>



        </div>

      </li>
    );
  }
}
export default EditFishForm;
