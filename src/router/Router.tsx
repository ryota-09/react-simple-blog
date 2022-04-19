import { Route, Switch } from "react-router-dom";
import { homeRoutes } from "./HomeRoutes";

export const Router = () => {
  return (
    <>
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
