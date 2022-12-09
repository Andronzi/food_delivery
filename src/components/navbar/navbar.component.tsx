import React from "react";
import List from "@components/navbar/items/list.component";
import Logo from "@components/navbar/items/logo.component";
import Location from "./items/location.component";
import styles from "./navbar.module.scss";
import Icons from "./items/icons.module";
import Hamburger from "./items/hamburger.component";
import { useAppSelector } from "@redux/hooks/hooks";

const Navbar: React.FC = () => {
  const name = useAppSelector(state => state.profile.user.fullName);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Hamburger />

        <Logo />

        <List />

        <Location />

        <Icons name={name ? name : false} />
      </div>
    </div>
  );
};

export default Navbar;
