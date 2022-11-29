import React from "react";
import user from "@icons/user.svg";
import cart from "@icons/cart.svg";
import styles from "@components/navbar/navbar.module.scss";

const Icons = (): JSX.Element => (
  <div className={styles.icons}>
    <img
      alt={user}
      className={styles.user}
      src={user}
    />

    <img
      alt={cart}
      className={styles.cart}
      src={cart}
    />
  </div>
);

export default Icons;
