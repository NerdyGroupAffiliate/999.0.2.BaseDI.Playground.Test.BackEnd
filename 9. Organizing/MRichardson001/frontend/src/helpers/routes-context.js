import React from "react";

const RoutesContext = React.createContext({
  routes: [],
  addToRoutes: () => {}
});

export default RoutesContext;
