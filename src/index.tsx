import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@redux/store";
<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Registration from "@components/pages/registration/registration.component";
import Auth from "@components/pages/registration/auth.component";
import NotFound from "@components/pages/404/404.component";
import App from "./components/pages/app/app.component";
=======
import App from "./components/pages/app/app.component";
import { BrowserRouter } from "react-router-dom";
>>>>>>> feature/redux
import "./index.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

<<<<<<< HEAD
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
  {
    path: "/auth",
    element: <Auth />,
  },
];

const router = createBrowserRouter(routerConfig);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
=======
// export const routerConfig = [
//   {
//     path: "/:page",
//     element: <App />,
//     errorElement: <NotFound />,
//   },
//   {
//     path: "/registration",
//     element: <Registration />,
//   },
//   {
//     path: "/auth",
//     element: <Auth />,
//   },
// ];

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
>>>>>>> feature/redux
  </Provider>,
);
