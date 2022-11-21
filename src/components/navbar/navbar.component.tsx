import React from "react";
import List from "@components/navbar/items/list.component";
import Logo from "@components/navbar/items/logo.component";
import Location from "./items/location.component";
import styles from "./navbar.module.scss";
import Icons from "./items/icons.module";
import Hamburger from "./items/hamburger.component";

const Navbar: React.FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <Hamburger />

      <Logo />

      <List />

      <Location />

      <Icons />
    </div>
  </div>
);

export default Navbar;
