import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LazyLoading from "components/public/lazy-loading";
import Loading from "components/public/loading";

const Routes = () => {
  return (
    <Switch>
      <Suspense fallback={<Loading></Loading>}>
        <Route
          exact
          path="/"
          component={LazyLoading(() => import("components/login"))}
        />
      </Suspense>
    </Switch>
  );
};

export default Routes;
