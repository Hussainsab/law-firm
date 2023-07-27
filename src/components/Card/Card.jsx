import React from "react";
import styles from "./Card.module.css";
import imagedata from "../../assets/user.png";
const Card = ({ image, heading, text, from }) => {
  return (
    <div className={styles.card}>
      <img src={image ? image : imagedata} alt="gift"></img>
      <h4>{heading}</h4>
      {from ? <h6>{from}</h6> : null}
      <p>{text}</p>
      {from ? null : <button>Read More</button>}
    </div>
  );
};

export default Card;
