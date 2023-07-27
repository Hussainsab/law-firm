import React from "react";
import styles from "./Profile.module.css";

const Profile = ({ image, name, cases }) => {
  return (
    <div className={styles.profile}>
      <img src={image} alt="profile"></img>
      <div>
        <h4>{name}</h4>
        <p>{cases} cases</p>
      </div>
    </div>
  );
};

export default Profile;
