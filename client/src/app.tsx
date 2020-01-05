import React, { Component } from "react";
import GlobalStyle from "./components/public/global-style";
import Login from "./components/login";
import ErrorBoundary from "components/error-boundary";
class app extends Component {
  render() {
    return (
      <>
        <ErrorBoundary>
          <GlobalStyle />
          <Login />
        </ErrorBoundary>
      </>
    );
  }
}

export default app;
