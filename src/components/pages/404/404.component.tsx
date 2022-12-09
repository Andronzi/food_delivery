import React from "react";
import pizza from "@images/pizza.svg";
import styles from "./404.module.scss";

const NotFound = () => (
  <div>
    <div className={styles.content}>
      <p className={styles.title}>44</p>

      <img
        alt="пицца"
        className={styles.image}
        src={pizza}
      />

      <p className={styles.text}>
        Ой... <br className={styles.br} /> Страница не найдена
      </p>
    </div>
  </div>
);

export default NotFound;
