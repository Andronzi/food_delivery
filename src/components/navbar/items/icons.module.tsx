import React from "react";
import user from "@icons/user.svg";
import cart from "@icons/cart.svg";
import styles from "@components/navbar/navbar.module.scss";
import { Link } from "react-router-dom";

interface Props {
  name: string | boolean;
}

const Icons = ({ name }: Props): JSX.Element => {
  const [visibility, setVisibility] = React.useState(false);
  const handleProfileImageClick = () => {
    setVisibility(prevState => !prevState);
  };

  return (
    <div className={styles.icons}>
      <img
        alt={user}
        className={styles.user}
        onClick={handleProfileImageClick}
        src={user}
      />

      <div
        className={`${styles.userPanel} ${
          visibility === true
            ? styles.userPanelVisible
            : styles.userPanelUnVisible
        }`}>
        <p className={styles.title}>{name || "Гость"}</p>
        {name === false ? (
          <>
            <Link to="registration">
              <p className={styles.text}>Зарегистрироваться</p>
            </Link>
            <Link to="auth">
              <p className={styles.text}>Авторизоваться</p>
            </Link>
          </>
        ) : (
          <>
            <p className={styles.text}>Мои данные</p>
            <Link to="orders">
              <p className={styles.text}>Мои заказы</p>
            </Link>
            <p className={styles.text}>Выйти</p>
          </>
        )}
      </div>

      <img
        alt={cart}
        className={styles.cart}
        src={cart}
      />
    </div>
  );
};

export default Icons;
