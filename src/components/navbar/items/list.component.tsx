import React from "react";
import styles from "@components/navbar/navbar.module.scss";
import { Link } from "react-router-dom";

const List = (): JSX.Element => (
  <ul className={styles.ul}>
    <li>
      <Link to="/">Меню</Link>
    </li>

    <li>
      <Link to="/orders">Заказы</Link>
    </li>
  </ul>
);

export default List;
