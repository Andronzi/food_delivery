import React from "react";
import reactDom from "react-dom";
import App from "./components/app/app.component";
import { Provider } from "react-redux";
import { store } from "@src/store";
import "./index.css";

reactDom.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
