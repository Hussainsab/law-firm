import React from "react";
import Card from "../Card/Card";
import styles from "./CardSection.module.css";
import imagedata from "../../assets/cardimage.png";

const data = [
  {
    image: imagedata,
    title: "98% Success Rate",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
  },
  {
    image: imagedata,
    title: "100% Success Rate",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
  },
  {
    image: imagedata,
    title: "100% Success Rate",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
  },
];

const CardSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.parentSection}>
        <div className={styles.heading}>
          <h1>Why Choose Us?</h1>
        </div>
        <div className={styles.cardSection}>
          {data.map((item, index) => {
            return (
              <Card
                image={item.image}
                heading={item.title}
                text={item.text}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
