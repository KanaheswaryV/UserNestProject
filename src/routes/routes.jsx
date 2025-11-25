import FrontPage from "../Components/FrontPage";
import Home from "../Components/Home";
import User from "../Components/User";
import Login from "../Components/Login";
import Logout from "../Components/Logout";
import UserDetails from "../Components/UserDetails";
import EditUser from "../Components/EditUser";


const routes = [
  { path: "/", element: <FrontPage /> },
  { path: "/home", element: <Home /> },
  { path: "/user", element: <User /> },
  { path: "/login", element: <Login /> },
  { path: "/logout", element: <Logout /> },
  { path: "/user/:id", element: <UserDetails/> },
  { path: "/edit-user/:id", element: <EditUser/> }

];

export default routes;
