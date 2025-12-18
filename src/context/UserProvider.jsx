import React, { useReducer } from "react";
import UserContext from "./UserContext";
import { userReducer, initialState } from "./userReducer";


export default function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ user: state.user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
