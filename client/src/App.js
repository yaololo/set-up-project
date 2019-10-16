import React, { Component } from "react";
import "./App.css";
import Carousels from "./components/carousels";

const timmer = setInterval(function() {
  console.log("Started");
  fetch("/api/", {
    method: "get"
  });
  // http.get("https://mock-api-1900.herokuapp.com");
}, 1000)
const drinkCoffee = () => timmer;

class App extends Component {
  componentDidMount() {
    drinkCoffee();
  }

  componentWillUnmount() {
    clearInterval(timmer);
  }
  render() {
    return (
      <>
        <Carousels></Carousels>
      </>
    );
  }
}
export default App;
