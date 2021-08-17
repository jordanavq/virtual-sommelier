import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import api from "./api/apiVinhos";
import Home from "./components/Home/Home";
import Countries from "./components/Countries/Countries";
import { Switch, Route } from "react-router-dom";

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
      <div>
        <Header active={true} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/countries" component={Countries} />
        </Switch>
        <Footer />;
      </div>
    );
  }
}

export default App;
