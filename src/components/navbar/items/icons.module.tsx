import React from "react";
import user from "@icons/user.svg";
import cart from "@icons/cart.svg";
import styles from "@components/navbar/navbar.module.scss";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@redux/hooks/hooks";
import { logout } from "@redux/slices/registerSlice";
import { deleteUser } from "@redux/slices/profileSlice";

interface Props {
  name: string | boolean;
}

const Icons = ({ name }: Props): JSX.Element => {
  const [visibility, setVisibility] = React.useState(false);
  const dispatch = useAppDispatch();

  const handleLinkClick = () => {
    setVisibility(prevState => !prevState);
  };

  const handleLogoutLinkClick = async () => {
    await dispatch(logout(localStorage.getItem("token")!));
    dispatch(deleteUser());
  };

  return (
    <div className={styles.icons}>
      <img
        alt={user}
        className={styles.user}
        onClick={handleLinkClick}
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
            <Link
              onClick={handleLinkClick}
              to="registration">
              <p className={styles.text}>Зарегистрироваться</p>
            </Link>

            <Link
              onClick={handleLinkClick}
              to="auth">
              <p className={styles.text}>Авторизоваться</p>
            </Link>
          </>
        ) : (
          <>
            <p className={styles.text}>Мои данные</p>

            <Link
              onClick={handleLinkClick}
              to="orders">
              <p className={styles.text}>Мои заказы</p>
            </Link>

            <p
              className={styles.text}
              onClick={handleLogoutLinkClick}>
              Выйти
            </p>
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
