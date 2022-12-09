import RegForm from "@components/userForm/regform.component";
import React from "react";
import styles from "./reg.module.scss";

const Registration = () => (
  <div>
    <div className={styles.formContent}>
      <p className={styles.title}>Регистрация</p>

      <RegForm />
    </div>
  </div>
);

export default Registration;
