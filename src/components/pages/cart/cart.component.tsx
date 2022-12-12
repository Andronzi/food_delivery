import React from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks/hooks";
import { getCartDishes } from "@redux/slices/cartSlice";
import CartItem from "@components/cart/cartItem";
import styles from "./cart.module.scss";

const Cart = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getCartDishes(localStorage.getItem("token")!));
  }, [dispatch]);
  const cart = useAppSelector(state => state.cart);

  if (!cart.dishes) {
    return <div>No dishes</div>;
  }

  return (
    <div className={styles.container}>
      {cart.dishes.map(cartElement => (
        <div className={styles.cartElement}>
          <CartItem
            amount={cartElement.amount}
            image={cartElement.image}
            name={cartElement.name}
            price={cartElement.totalPrice}
          />

          <hr className={styles.hr} />
        </div>
      ))}
    </div>
  );
};

export default Cart;
