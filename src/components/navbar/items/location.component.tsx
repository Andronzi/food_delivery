import React from "react";
import styles from "@components/navbar/navbar.module.scss";
import location from "@icons/location.svg";

const Location = (): JSX.Element => (
  <div className={styles.location}>
    <img
      alt="logo"
      className={styles.locationImage}
      src={location}
    />

    <p className={styles.locationText}>Tomsk</p>
  </div>
);

export default Location;
