import React from "react";
import styles from "./NewLetterSection.module.css";
const NewLetterSection = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <div className={styles.newSection}>
        <h1>Subscribe Our Newsletter</h1>
        <form className={styles.form} onSubmit={handleForm}>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Enter your Email" />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default NewLetterSection;
