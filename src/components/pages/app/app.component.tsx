import React from "react";
import "@components/ui/button/button.module.scss";
import Navbar from "@components/navbar/navbar.component";
import Food from "@components/food/food.component";

const App = () => (
  <div className="app">
    <Navbar />

    <Food />
  </div>
);

export default App;
