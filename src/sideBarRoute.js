import React from "react";
import { Route, Switch } from "react-router";
import Sidebar from "./components/Sidebar/sidebar";


export const useSideBarRoute = (value) => {
  switch (value) {
    case 1:
      <Route path="http://localhost:1337/lists/1"/>
      break;
      case 2:
      <Route path="http://localhost:1337/lists/2"/>
      break;
    default:
      break;
  }
}