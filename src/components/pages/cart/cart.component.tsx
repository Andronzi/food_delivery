import React from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks/hooks";
import { getCartDishes } from "@redux/slices/cartSlice";
import CartItem from "@components/cart/cartItem";
import styles from "./cart.module.scss";
import { Link } from "react-router-dom";

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
            dishId={cartElement.id}
            image={cartElement.image}
            name={cartElement.name}
            price={cartElement.totalPrice}
          />

          <hr className={styles.hr} />
        </div>
      ))}

      {cart.dishes.length > 0 && (
        <Link to="/purchase">
          <button className={styles.button}>Оформить</button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
