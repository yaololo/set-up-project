import React, { Component } from "react";
import GlobalStyle from "./components/public/global-style";
import EmployeeExplore from "./components/employee-explore";

class app extends Component {
  render() {
    return (
      <>
        <EmployeeExplore />
        <GlobalStyle />
      </>
    );
  }
}

export default app;
