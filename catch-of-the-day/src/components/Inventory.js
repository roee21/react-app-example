import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import { object } from "prop-types";
import Login from "./Login";
import firebase from "firebase";
import base, { firebaseApp } from "../base";

class Inventory extends React.Component {
  state = {
    uid: null,
    owner: null,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async (authData) => {
    const store = await base.fetch(this.props.storeid, { context: this });

    if (!store.owner) {
      await base.post(`${this.props.storeid}/owner`, {
        data: authData.user.uid,
      });
    }

    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid,
    });
    console.log(authData);
  };

  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebase.auth().signInWithPopup(authProvider).then(this.authHandler);
  };

  logout = async () => {
    console.log("logout");
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };
  render() {
    const logout = <button onClick={this.logout}> Log Out </button>;

    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }

    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>You are not the store owner</p>
          {logout}
        </div>
      );
    }

    return (
      <div className="inventory">
        <p className="title">(you are now in editing mode)</p>
        {logout}
        <ul className="fishes editing">
          {Object.keys(this.props.fish).map((key) => (
            <EditFishForm
              key={key}
              index={key}
              fish={this.props.fish[key]}
              updateFish={this.props.updateFish}
              deleteFish={this.props.deleteFish}
            />
          ))}
        </ul>
        <div className="load-wrapper">
        <button className="add-samples" onClick={this.props.loadSampleFishes}> (load sample products) </button>
        </div>

        <AddFishForm addFish={this.props.addFish} />
      </div>
    );
  }
}

export default Inventory;
