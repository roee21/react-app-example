import React from "react";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = (event) => {
    event.preventDefault();

    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };

    console.log(fish);

    this.props.addFish(fish);
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" type="text" placeholder="name" ref={this.nameRef} />

        <input
          name="price"
          type="text"
          placeholder="price"
          ref={this.priceRef}
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="notavailable">Sold Out!</option>
        </select>

        <textarea name="desc" placeholder="Description" ref={this.descRef} />

        <input
          name="image"
          type="text"
          placeholder="image"
          ref={this.imageRef}
        />

        <button type="submit">Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
