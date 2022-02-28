import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import PageLoader from "@/components/PageLoader";

const Dashboard = lazy(() =>
  import(/*webpackChunkName:'DashboardPage'*/ "@/pages/Dashboard")
);

const Company = lazy(() =>
  import(/*webpackChunkName:'CompanyPage'*/ "@/pages/Company")
);

const User = lazy(() =>
  import(/*webpackChunkName:'UserPage'*/ "@/pages/User")
);

const Unit = lazy(() =>
  import(/*webpackChunkName:'UnitPage'*/ "@/pages/Unit")
);

const Asset = lazy(() =>
  import(/*webpackChunkName:'AssetPage'*/ "@/pages/Asset")
);


const Logout = lazy(() =>
  import(/*webpackChunkName:'LogoutPage'*/ "@/pages/Logout")
);
const NotFound = lazy(() =>
  import(/*webpackChunkName:'NotFoundPage'*/ "@/pages/NotFound")
);

export default function AppRouter() {
  const location = useLocation();
  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <PrivateRoute path="/" component={Dashboard} render={() => <Redirect to="/dashboard" />} exact/>
          <PrivateRoute component={Dashboard} path="/dashboard"  exact />
          <PrivateRoute component={Company} path="/company" exact />
          <PrivateRoute component={User} path="/user" exact />
          <PrivateRoute component={Unit} path="/unit" exact />
          <PrivateRoute component={Asset} path="/asset" exact />
          <PrivateRoute component={Logout} path="/logout" exact />
          <PublicRoute path="/login" render={() => <Redirect to="/" />} />
          <Route
            path="*"
            component={NotFound}
            render={() => <Redirect to="/notfound" />}
          />
        </Switch>
      </AnimatePresence>
    </Suspense>
  );
}
