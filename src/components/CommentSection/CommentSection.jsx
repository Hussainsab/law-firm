import React from "react";
import styles from "./CommentSection.module.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";
import Card from "../Card/Card";
import imagedata from "../../assets/user.png";
console.log("from section = ", imagedata);

let commentData = [
  {
    image: imagedata,
    title: "Jane Cooper",
    from: "Ceo of Hunt",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
  },
  {
    image: imagedata,
    title: "Devon Lane",
    from: "Ceo of Hunt",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
  },
  {
    image: imagedata,
    title: "Robert Fox",
    from: "Ceo of Hunt",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
  },
];
const CommentSection = () => {
  return (
    <div className={styles.conatiner}>
      <div className={styles.CommentSection}>
        <div className={styles.heading}>
          <h1>What says our happy Clients</h1>
          <div className={styles.navigaton}>
            <button>
              <KeyboardBackspaceIcon />
            </button>
            <button>
              <EastIcon />
            </button>
          </div>
        </div>
        <div className={styles.userCommentCard}>
          {commentData.map((item, index) => {
            console.log("user image", item.imagedata);
            return (
              <Card
                image={item.imagedata}
                heading={item.title}
                text={item.text}
                from={item.from}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
