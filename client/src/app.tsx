import React, { Component } from "react";
import GlobalStyle from "./components/public/global-style";
import Login from "./components/login";
class app extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Login />
      </>
    );
  }
}

export default app;
