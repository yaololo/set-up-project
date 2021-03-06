import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LazyLoading from "components/public/lazy-loading";
import { withRouter, RouteComponentProps } from "react-router-dom";

const Routes: React.FC<RouteComponentProps> = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={LazyLoading(() => import("components/login"))}
      />
      <Route
        exact
        path="/signup"
        component={LazyLoading(() => import("components/signup"))}
      />
      <Route
        path="/main"
        component={LazyLoading(() => import("components/main"))}
      />
      <Route component={() => <Redirect to={"/"} />} />
    </Switch>
  );
};

export default withRouter(Routes);
