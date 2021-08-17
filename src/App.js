import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import api from "./api/apiVinhos";

class App extends Component {
  state = {
    database: [],
  };

  coponentdidmount() {
    api.wineApi().then((response) =>
      this.setState({
        database: response.data,
      })
    );
  }

  render() {
    return (
      <>
        <Header active={true} />
        <Footer />;
      </>
    );
  }
}

export default App;
