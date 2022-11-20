import React from "react";
import UnsortArticlesList from "@components/unsortarticleslist/list.component";
import delivery from "@icons/delivery.svg";
import location from "@icons/location.svg";
import profile from "@icons/profile.svg";
import cart from "@icons/cart.svg";
import styles from "./navbar.module.scss";

const Navbar: React.FC = () => {
  const [state, setState] = React.useState([
    { href: "/menu", value: "Меню" },
    { href: "/orders", value: "Заказы" },
  ]);
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            alt="logo"
            src={delivery}
          />

          <h1 className={styles.title}>Delivery</h1>

          <UnsortArticlesList arrayOfElements={state} />
        </div>

        <div className={styles.icons}>
          <div className={styles.location}>
            <img
              alt="location"
              src={location}
            />

            <p className={styles.font}>Tomsk</p>
          </div>

          <img
            alt={profile}
            className={styles.logo}
            src={profile}
          />

          <img
            alt={cart}
            className={styles.logo}
            src={cart}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
