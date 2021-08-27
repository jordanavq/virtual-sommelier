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
import Search from "./components/Search/searchBar";
import SelectedCountry from "./components/SelectedCountry/SeletectedCountry";
import SelectedGrapes from "./components/SelectedGrapes/SelectedGrapes";

class App extends Component {
  state = {
    database: [],
    countries: [],
    grapes: [],
    filtered: [],
  };

  filterWine = (str) => {
    const filtered = this.state.database.filter((wine) =>
      wine.name.toLowerCase().includes(str.toLowerCase())
    );
    this.setState({
      filtered,
    });
  };
  componentDidMount = () => {
    axios
      .get("https://ironrest.herokuapp.com/virtual-sommelier")
      .then((result) => {
        this.setState({
          database: result.data,
          countries: result.data.map((wine) => wine.region),
          grapes: result.data.map((allWine) => allWine.grape),
          /* filtered: result.data, */
        });
      });
  };

  render() {
    return (
      <div>
        <Header />

        <div className="mainContent">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/wines"
              render={(props) => (
                <WineList
                  {...props}
                  filtered={this.state.filtered}
                  wines={this.state.database}
                  filterWine={this.filterWine}
                />
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
              render={(props) => (
                <Grapes {...props} grapes={this.state.grapes} />
              )}
            />
            <Route
              path="/grapes/:name"
              render={(props) => (
                <SelectedGrapes {...props} wines={this.state.database} />
              )}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
