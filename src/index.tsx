import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@redux/store";
<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/pages/app/app.component";
=======
import App from "./components/pages/app/app.component";
import { BrowserRouter } from "react-router-dom";
>>>>>>> feature/redux_cart
import "./index.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

<<<<<<< HEAD
export const routerConfig = [
  {
    path: "/:page",
    element: <App />,
  },
];

const router = createBrowserRouter(routerConfig);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
=======
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
>>>>>>> feature/redux_cart
  </Provider>,
);
