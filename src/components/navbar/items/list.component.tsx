import React from "react";
import styles from "@components/navbar/navbar.module.scss";

const List = (): JSX.Element => (
  <ul className={styles.ul}>
    <li>
      <a href="/menu">Меню</a>
    </li>

    <li>
      <a href="/orders">Заказы</a>
    </li>
  </ul>
);

export default List;
