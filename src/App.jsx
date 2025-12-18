import React from "react";
import RoutesHandler from "./routes/RoutesHandler";
import UserProvider from "./context/UserProvider.jsx";

function App() {
  return (
    <UserProvider>
      <RoutesHandler />
    </UserProvider>
  );
}

export default App;
