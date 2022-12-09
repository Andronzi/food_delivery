import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@redux/store";
import App from "./components/pages/app/app.component";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

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
  </Provider>,
);
