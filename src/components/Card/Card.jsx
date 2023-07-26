import React from "react";
import styles from "./Card.module.css";
const Card = ({ image, heading, text, from }) => {
  console.log(image);
  return (
    <div className={styles.card}>
      <img src={image} alt="gift"></img>
      <h4>{heading}</h4>
      <p>{text}</p>
      {from ? null : <button>Read More</button>}
    </div>
  );
};

export default Card;
