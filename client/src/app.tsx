import React, { Component } from "react";
import GlobalStyle from "./components/public/global-style";
import ErrorBoundary from "components/error-boundary";
import Routes from "components/routes";
import { BrowserRouter } from "react-router-dom";

class app extends Component {
  render() {
    return (
      <ErrorBoundary>
        <GlobalStyle />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ErrorBoundary>
    );
  }
}

export default app;
