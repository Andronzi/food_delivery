import AuthForm from "@components/userForm/authForm.component";
import React from "react";
import styles from "./reg.module.scss";

const Authorisation = () => (
  <div>
    <div className={styles.formContent}>
      <p className={styles.title}>Авторизация</p>

      <AuthForm />
    </div>
  </div>
);

export default Authorisation;
