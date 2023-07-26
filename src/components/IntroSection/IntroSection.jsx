import React from "react";
import styles from "./IntroSection.module.css";
const IntroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.introSection}>
        <div className={styles.introHeading}>
          <h1>Let's Introduce Ourself</h1>
        </div>
        <div className={styles.intro}>
          <h3>Criminal Lawyer</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
