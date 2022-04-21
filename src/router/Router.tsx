import { Route, Switch } from "react-router-dom";
import { homeRoutes } from "./HomeRoutes";

import { Header } from "../components/organisms/Header"

export const Router = () => {
  return (
    <>
    <Header />
      <Switch>
        <Route
          path="/"
          render={({ match: url }) => (
            <Switch>
              {homeRoutes.map((route) => (
                <Route key={route.path} exact={route.exact} path={route.path}>
                  {route.children}
                </Route>
              ))}
            </Switch>
          )}
        ></Route>
      </Switch>
    </>
  );
};
