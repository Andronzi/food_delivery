import Navbar from "@components/navbar/navbar.component";
import RegForm from "@components/regForm/regform.component";
import React from "react";
import styles from "./reg.module.scss";

const Registration = () => (
  <>
    <Navbar />

    <div className={styles.formContent}>
      <p className={styles.title}>Регистрация</p>

      <RegForm />
    </div>
  </>
);

export default Registration;
