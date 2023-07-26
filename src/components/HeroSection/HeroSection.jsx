import React from "react";
import styles from "./HeroSection.module.css";
import image from "../../assets/heroimage.png";
import MailIcon from "@mui/icons-material/Mail";
const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.mainContent}>
          <h1>You dont have to Fight them Alone.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
          <div className={styles.contact}>
            <div className={styles.email}>
              <MailIcon sx={{ color: "gray", fontSize: "1rem" }} />
              <input type="text" placeholder="Enter Email Address Your" />
            </div>

            <button>Let's Talk</button>
          </div>
        </div>

        <div className={styles.mainImage}>
          <img src={image} alt="hero"></img>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
