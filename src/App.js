import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header active={true} />
      <Footer />;
    </>
  );
}

export default App;
