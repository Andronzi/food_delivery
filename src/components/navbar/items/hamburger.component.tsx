import React from "react";
import styles from "@components/navbar/navbar.module.scss";
import { useAppDispatch } from "@redux/hooks/hooks";
import { logout } from "@redux/slices/registerSlice";
import { deleteUser } from "@redux/slices/profileSlice";
import { Link } from "react-router-dom";

interface Props {
  name: string | boolean;
}

const Hamburger = ({ name }: Props): JSX.Element => {
  const [active, setActive] = React.useState(false);
  const dispatch = useAppDispatch();
  const handleLogoutLinkClick = async () => {
    setActive(false);
    await dispatch(logout(localStorage.getItem("token")!));
    dispatch(deleteUser());
  };

  const handleMenuClick = () => {
    setActive(prevState => !prevState);
  };

  const handleLinkClick = () => {
    setActive(false);
  };

  return (
    <div className={styles.mobileMenu}>
      <button
        onClick={handleMenuClick}
        className={styles.menu}
        type="button">
        <span />
      </button>

      <ul className={`${styles.mobileList} ${active && styles.active}`}>
        <li onClick={handleLinkClick}>
          <Link to="/">Меню</Link>
        </li>

        <li onClick={handleLinkClick}>
          <Link to="/orders">Заказы</Link>
        </li>

        <p className={styles.title}>{name || "Гость"}</p>

        {name === false ? (
          <>
            <Link
              to="registration"
              onClick={handleLinkClick}>
              <p className={styles.text}>Зарегистрироваться</p>
            </Link>

            <Link
              to="auth"
              onClick={handleLinkClick}>
              <p className={styles.text}>Авторизоваться</p>
            </Link>
          </>
        ) : (
          <>
            <p
              className={styles.text}
              onClick={handleLinkClick}>
              Мои данные
            </p>

            <p
              className={styles.text}
              onClick={handleLogoutLinkClick}>
              Выйти
            </p>
          </>
        )}
      </ul>
    </div>
  );
};

export default Hamburger;
