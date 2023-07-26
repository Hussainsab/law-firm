import React from "react";
import styles from "./Navbar.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.menu}>
          <ul>
            <li>Home</li>
            <li>Attorneys</li>
            <li>Practice Area</li>
            <li>About Us</li>
          </ul>
        </div>
        <button className={styles.contact}>Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
