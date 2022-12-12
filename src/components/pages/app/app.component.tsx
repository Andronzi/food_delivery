import React from "react";
import Navbar from "@components/navbar/navbar.component";
import Food from "@components/food/food.component";
import { Route, Routes } from "react-router-dom";
import Authorisation from "../registration/auth.component";
import Registration from "../registration/registration.component";
import NotFound from "../404/404.component";

const App = () => (
  <div>
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
        element={<NotFound />}
        path="/*"
      />
    </Routes>
  </div>
);

export default App;
