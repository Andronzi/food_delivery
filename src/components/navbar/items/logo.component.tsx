import React from "react";
import styles from "@components/navbar/navbar.module.scss";
import delivery from "@icons/delivery.svg";

const Logo = (): JSX.Element => (
  <div className={styles.logo}>
    <img
      alt="logo"
      className={styles.logoImage}
      src={delivery}
    />

    <p className={styles.logoText}>Delivery</p>
  </div>
);

export default Logo;
