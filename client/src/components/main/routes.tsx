import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Account from "components/account";
import UserApi from "components/user-api";

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/main/account" component={Account} />
      <Route exact path="/main/user-api" component={UserApi} />
      <Route render={() => <Redirect to="/main/account" />} />
    </Switch>
  );
};

export default MainRoutes;
