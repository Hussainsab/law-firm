import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { ReactComponent as Pin } from "../../assets/Icon.svg";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.footerNavigation}>
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
          <div className={styles.contact}>
            <InstagramIcon sx={{ color: "#e3b748" }} />
            <FacebookIcon sx={{ color: "#e3b748" }} />
            <TwitterIcon sx={{ color: "#e3b748" }} />
            <Pin className={styles.icon} />
          </div>
        </div>
        <div className={styles.menu}>
          <ul>
            <li>© 2020 Acme. All rig</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
