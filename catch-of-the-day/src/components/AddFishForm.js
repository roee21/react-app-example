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

    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
      <div className="form-wrapper">
      <div className="new-title">
      <h1>ADD NEW PRODUCT</h1>
      </div>
      <div className="form-wrapper">
        <input
          className="fe-name"
          name="name"
          type="text"
          placeholder="name"
          ref={this.nameRef}
        />

        <input
          name="price"
          type="text"
          placeholder="price"
          ref={this.priceRef}
        />

                <input
          name="image"
          type="text"
          placeholder="image"
          ref={this.imageRef}
        />

        <select name="status" ref={this.statusRef}>
          <option value="available">Available</option>
          <option value="notavailable">Sold Out!</option>
        </select>

        <textarea name="desc" placeholder="Description" ref={this.descRef} />


        <div className="btn-wrapper">
        <button type="submit">(add new product)</button>
        </div>
        </div>
        </div>
      </form>
    );
  }
}

export default AddFishForm;
