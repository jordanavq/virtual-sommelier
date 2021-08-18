import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Countries from "./components/Countries/Countries";
import Grapes from "./components/Grapes/Grapes";
import GrapesCard from "./components/Grapes/GrapesCard";
import { Switch, Route } from "react-router-dom";

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
        <Header active={true} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/countries" component={Countries} />
          <Route path="/grapes" component={Grapes} />
        </Switch>
        <GrapesCard />
        <Footer />;
      </div>
    );
  }
}

export default App;
