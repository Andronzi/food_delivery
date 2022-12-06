import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Registration from "@components/pages/registration/registration.component";
import NotFound from "@components/pages/404/404.component";
import App from "./components/pages/app/app.component";
import "./index.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

export const routerConfig = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
];

const router = createBrowserRouter(routerConfig);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
