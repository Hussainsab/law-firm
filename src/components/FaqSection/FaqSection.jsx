import React from "react";
import styles from "./FaqSection.module.css";
import AccordionComponet from "../Accordion/AccordionComponent";

let accordionData = [
  {
    title: "Do I need a personal injury report?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
  },
  {
    title: "How much is my case worth?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
  },
  {
    title: "What should I do right after car accidect",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
  },
  {
    title: "How much is my case worth?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
  },
];

const FaqSection = () => {
  const [expanded, setExpanded] = React.useState(0);

  const handleChange = (panel) => (event, isExpanded) => {
    console.log("isexpanded = ", isExpanded, panel);
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.faqSection}>
        <h1>FAQ</h1>

        <div className={styles.faqChildSection}>
          <div className={styles.leftSection}>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
          <div className={styles.rightSection}>
            {accordionData.map((item, index) => {
              return (
                <AccordionComponet
                  expanded={expanded}
                  handleChange={handleChange}
                  id={index}
                  title={item.title}
                  answer={item.answer}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
