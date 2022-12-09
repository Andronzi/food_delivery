import React from "react";
import "@components/ui/button/button.module.scss";
import Navbar from "@components/navbar/navbar.component";
import Food from "@components/food/food.component";
<<<<<<< HEAD:src/components/pages/app/app.component.tsx
=======
import { Route, Routes } from "react-router-dom";
import Authorisation from "../registration/auth.component";
import Registration from "../registration/registration.component";
import NotFound from "../404/404.component";
>>>>>>> feature/redux:src/components/app/app.component.tsx

const App = () => (
  <div className="app">
    <Navbar />

<<<<<<< HEAD:src/components/pages/app/app.component.tsx
    <Food />
=======
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
        path="/*"
        element={<NotFound />}
      />
    </Routes>
>>>>>>> feature/redux:src/components/app/app.component.tsx
  </div>
);

export default App;
