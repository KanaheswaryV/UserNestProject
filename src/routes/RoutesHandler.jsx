import { Routes, Route, BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routes";

const RoutesHandler = () => {
  return (
    <BrowserRouter>
      {/* <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes> */}
      <RenderRoutes />
    </BrowserRouter>
  );
};

const RenderRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

export default RoutesHandler;
