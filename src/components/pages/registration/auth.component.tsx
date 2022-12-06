import Navbar from "@components/navbar/navbar.component";
import AuthForm from "@components/userForm/authForm.component";
import React from "react";
import styles from "./reg.module.scss";

const Authorisation = () => (
  <>
    <Navbar />

    <div className={styles.formContent}>
      <p className={styles.title}>Регистрация</p>

      <AuthForm />
    </div>
  </>
);

export default Authorisation;
