import React from "react";
import "@components/ui/button/button.module.scss";
import Navbar from "@components/navbar/navbar.component";
import Food from "@components/food/food.component";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch } from "@redux/hooks/hooks";
import { getProfile } from "@redux/slices/profileSlice";
import Cart from "../cart/cart.component";
import Authorisation from "../registration/auth.component";
import Registration from "../registration/registration.component";
import NotFound from "../404/404.component";
import Purchase from "../purchase/purchase.component";
import Orders from "../orders/orders.component";
import OrderDetails from "../orderDetails/OrderDetails";
import ProfileForm from "@components/profile/profile";
import DishComponent from "../dish/dish.component";

const App = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getProfile(localStorage.getItem("token")!));
  }, [dispatch]);

  return (
    <div className="app">
      <Navbar />

      <ProfileForm />

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
          element={<Cart />}
          path="cart"
        />

        <Route
          element={<Purchase />}
          path="purchase"
        />

        <Route
          element={<Orders />}
          path="orders"
        />

        <Route
          element={<OrderDetails />}
          path="/order/:id"
        />

        <Route
          element={<DishComponent />}
          path="/item/:id"
        />

        <Route
          element={<NotFound />}
          path="*"
        />
      </Routes>
    </div>
  );
};

export default App;
