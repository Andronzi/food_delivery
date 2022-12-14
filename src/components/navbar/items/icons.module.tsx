import React from "react";
import user from "@icons/user.svg";
import cart from "@icons/cart.svg";
import styles from "@components/navbar/navbar.module.scss";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@redux/hooks/hooks";
import { logout } from "@redux/slices/registerSlice";
import {
  deleteUser,
  toggleOpenOfUserEditForm,
} from "@redux/slices/profileSlice";
import { toast } from "react-hot-toast";

interface Props {
  name: string | boolean;
}

const Icons = ({ name }: Props): JSX.Element => {
  const [visibility, setVisibility] = React.useState(false);
  const dispatch = useAppDispatch();

  const handleLinkClick = () => {
    setVisibility(prevState => !prevState);
  };

  const handleProfileDataClick = () => {
    dispatch(toggleOpenOfUserEditForm(true));
  };

  const handleLogoutLinkClick = async () => {
    const logoutResponse = await dispatch(
      logout(localStorage.getItem("token")!),
    );

    console.log(logoutResponse);

    if (logoutResponse.type === "logoutUser/rejected") {
      toast.error("Возникла ошибка", {
        duration: 1000,
        style: { fontFamily: "Montserrat" },
      });
    } else {
      toast.success("Вы успешно вышли", {
        duration: 1000,
        style: { fontFamily: "Montserrat" },
      });
    }

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
            <p
              onClick={handleProfileDataClick}
              className={styles.text}>
              Мои данные
            </p>

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

      <Link to="cart">
        <img
          alt={cart}
          className={styles.cart}
          src={cart}
        />
      </Link>
    </div>
  );
};

export default Icons;
