import React from "react";
import { StackNavigator } from "react-navigation";

import LoginScreen from "./src/screens/Login";
import AccountScreen from "./src/screens/Account";

const Stack = StackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    Account: {
      screen: AccountScreen
    }
  },
  {
    initialRouteName: "Login"
  }
);

export default Stack;

