import React from "react";
import "@components/ui/button/button.module.scss";
import Navbar from "@components/navbar/navbar.component";
import Food from "@components/food/food.component";
import Authorisation from "@components/pages/registration/auth.component";
import Registration from "@components/pages/registration/registration.component";
import NotFound from "@components/pages/404/404.component";
import { Route, Routes } from "react-router-dom";

const App = () => (
  <div className="app">
    <Navbar />

    <Routes>
      <Route
        element={<Food />}
        path="/"
      />

      <Route
        element={<Authorisation />}
        path="auth"
      />

      <Route
        element={<Registration />}
        path="registration"
      />

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  </div>
);

export default App;
