import React from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import styles from "./PhotoGrid.module.css";

const PhotoGrid = () => {
  return (
    <div className={styles.container}>
      <h1>Area of Practices</h1>
      <div className={styles.gridContainer}>
        <div className={styles.child}>
          <img src={image1} alt="img" />
          <p>Business Law</p>
        </div>
        <div className={styles.child}>
          <img src={image2} alt="img" />
          <p>Parthnership Law</p>
        </div>
        <div className={styles.child}>
          <img src={image3} alt="img" />
          <p>Real Estate Law</p>
        </div>
        <div className={styles.child}>
          <img src={image4} alt="img" />
          <p>Business Law</p>
        </div>
        <div className={styles.child}>
          <img src={image5} alt="img" />
          <p>Landlord Disputes</p>
        </div>
        <div className={styles.child}>
          <img src={image6} alt="img" />
          <p>Elder Abuse</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;
