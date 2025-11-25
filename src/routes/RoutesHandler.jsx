import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes from "./routes";

const RoutesHandler = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesHandler;
