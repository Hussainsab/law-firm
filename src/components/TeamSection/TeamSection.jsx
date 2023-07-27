import React from "react";
import image1 from "../../assets/team1.png";
import image2 from "../../assets/team2.png";
import image3 from "../../assets/team3.png";
import image4 from "../../assets/team4.png";
import image5 from "../../assets/team5.png";
import image6 from "../../assets/team6.png";
import Profile from "../Profile/Profile";
import styles from "./TeamSection.module.css";

const data = [
  {
    image: image1,
    name: "Danial Def",
    cases: 301,
  },
  {
    image: image2,
    name: "Sanfole",
    cases: 850,
  },
  {
    image: image3,
    name: "Cesforila",
    cases: 470,
  },
  {
    image: image4,
    name: "Colleen",
    cases: 180,
  },
  {
    image: image5,
    name: "Haldone",
    cases: 221,
  },
  {
    image: image6,
    name: "Nik Jeo",
    cases: 350,
  },
];
const TeamSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.teamSection}>
        <h1>Our Team</h1>
        <div className={styles.profileSection}>
          {data.map((item, index) => {
            return (
              <Profile
                image={item.image}
                name={item.name}
                cases={item.cases}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
