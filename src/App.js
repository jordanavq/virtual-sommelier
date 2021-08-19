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

class App extends Component {
  state = {
    database: [],
  };

  componentDidMount = () => {
    axios
      .get("https://ironrest.herokuapp.com/virtual-sommelier")
      .then((result) => {
        this.setState({
          database: result.data,
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
          <Route path="/countries" component={Countries} />
          <Route path="/grapes" component={Grapes} />
        </Switch>
        <Footer />;
      </div>
    );
  }
}

export default App;
