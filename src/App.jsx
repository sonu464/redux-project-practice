import React from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

import { useSelector } from "react-redux";

import Counter from "./components/Counter";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <React.Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />;
    </React.Fragment>
  );
}

export default App;
