// @flow
import React, { Component } from "react";
import logo from "./logo.svg";
import spinner from "./ajax-loader.gif";
import "./App.css";
import { LocationStore } from "../stores/LocationStore";
import { locationActions } from "../actions/LocationActions";

class App extends Component {
  state: {
    locations: Array<Object>,
    errorMessage: ?string
  };

  constructor() {
    super();

    this.state = {
      locations: LocationStore.getState(),
      errorMessage: null
    };
  }

  componentDidMount = () => {
    LocationStore.listen(this.onChange);
    locationActions.fetchLocations();
  };

  componentWillUnmount = () => {
    LocationStore.unlisten(this.onChange);
  };

  onChange = (state: Object) => {
    this.setState(state);
  };

  render() {
    const { errorMessage, locations } = this.state;

    if (errorMessage) {
      return <div>Something is wrong</div>;
    }

    if (!locations.length) {
      return (
        <div>
          <img src={spinner} alt="spinner" />
        </div>
      );
    }

    if (LocationStore.isLoading()) {
      return (
        <div>
          <img src={spinner} alt="spinner" />
        </div>
      );
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <h1>Locations</h1>
        </div>
      </div>
    );
  }
}

export default App;
