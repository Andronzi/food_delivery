/* eslint-disable react/jsx-max-depth */
import React from "react";
import Navbar from "@components/navbar/navbar.component";
import pizza from "@images/pizza.svg";
import styles from "./404.module.scss";

const NotFound = () => (
  <>
    <Navbar />

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
  </>
);

export default NotFound;
