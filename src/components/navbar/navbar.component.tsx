/* eslint-disable react/jsx-max-depth */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import List from "@components/navbar/items/list.component";
import Logo from "@components/navbar/items/logo.component";
import Location from "./items/location.component";
import styles from "./navbar.module.scss";
import Icons from "./items/icons.module";

const Navbar: React.FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <label
        className={styles.menu}
        htmlFor="menu__toggle">
        <span />
      </label>

      <Logo />

      <List />

      <Location />

      <Icons />
    </div>
  </div>
);

export default Navbar;
