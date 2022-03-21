import { FC } from "react";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes, RouteNames } from "../router";

export const AppRouter: FC = () => {
  const auth = true;
  return (
    <>
      {auth ? (
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              path={route.path}
              element={<route.element />}
              key={route.path}
            />
          ))}
          {/* <Redirect to={RouteNames.LOGIN} /> */}
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              path={route.path}
              element={<route.element />}
              key={route.path}
            />
          ))}
          {/* <Redirect to={RouteNames.LOGIN} /> */}
        </Routes>
      )}
    </>
  );
};
