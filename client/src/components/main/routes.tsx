import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Account from "components/account";

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/main/account" component={Account} />
      <Route render={() => <Redirect to="/main/account" />} />
    </Switch>
  );
};

export default MainRoutes;
