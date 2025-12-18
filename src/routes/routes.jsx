import FrontPage from "../Components/FrontPage";
import Home from "../Components/Home";
import User from "../Components/User";
import Login from "../Components/Login";
import Logout from "../Components/Logout";
import UserLayout from "../Components/UserLayout";
import UserDetails from "../Components/UserDetails";
import EditUser from "../Components/EditUser";
import FeedbackForm from "../Components/FeedbackForm";

const routes = [
  { path: "/", element: <FrontPage /> },
  { path: "/home", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/logout", element: <Logout /> },
  { path: "/feedback", element: <FeedbackForm /> },

  {
    path: "/user",
    element: <UserLayout />,
    children: [
      { index: true, element: <User /> },         // /user
      { path: ":id", element: <UserDetails /> },  // /user/5
      { path: "edit/:id", element: <EditUser /> } // /user/edit/5
    ]
  }
];

export default routes;
