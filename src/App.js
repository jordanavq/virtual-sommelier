import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Countries from "./components/Countries/Countries";
import Grapes from "./components/Grapes/Grapes";
import WineList from "./components/WineList/WineList";
import Search from "./components/Search/searchBar"
import SelectedCountry from "./components/SelectedCountry/SeletectedCountry";

class App extends Component {
  state = {
    database: [],
    countries: [],
    grapes: [],
  };

  componentDidMount = () => {
    axios
      .get("https://ironrest.herokuapp.com/virtual-sommelier")
      .then((result) => {
        this.setState({
          database: result.data,
          countries: result.data.map((wine) => wine.region),
          grapes: result.data.map((allWine) => allWine.grape),
        });
      });
  };

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/wines"
            render={(props) => (
              <WineList {...props} wines={this.state.database} />
            )}
          />
          <Route
            exact
            path="/countries"
            render={(props) => (
              <Countries {...props} countries={this.state.countries} />
            )}
          />
          <Route
            path="/countries/:name"
            render={(props) => (
              <SelectedCountry {...props} wines={this.state.database} />
            )}
          />
          <Route
            exact
            path="/grapes"
            render={(props) => <Grapes {...props} grapes={this.state.grapes} />}
          />
          <Route
            path="/grapes/:name"
            render={(props) => <h1>{props.match.params.name}</h1>}
          />
        </Switch>
        <Footer />;
      </div>
    );
  }
}

export default App;
