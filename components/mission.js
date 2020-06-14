import React from "react";
import styles from "../styles/mission.module.css";
import { Row, Col, Card } from "antd";

const Mission = () => {
  const mission = (
    <div>
      <p>
        Joyrampur Modern Education And Charitable Society is a registered NGO
        working in the field of education with Registration No : S/1L/70517.
      </p>{" "}
      <p>
        Following are the missions, we are trying to achieve through our
        organisation:
      </p>{" "}
      <ul>
        <li>To make education enjoyable and fun.</li>
        <li>
          To empower all students to apply their acquired skills and knowledge,
          and to rely upon their personal attributes to lead productive lives
          and to become contributing members of the global community.
        </li>
        <li>
          To provide a high-quality, comprehensive, and meaningful education for
          all students. Each student will be expected to succeed within the
          bounds of their abilities and chosen educational goals. Each student
          will be treated as an individual, given the tools to be a lifelong
          learner, and taught to function as a member of a group and as a
          productive member of society.
        </li>
      </ul>
    </div>
  );
  return (
    <section id="mission" className="sections">
      <div className={styles.mission}>
        <div className={styles.missionHeading}>Our Mission</div>
        <div className={styles.missionDescription}>{mission}</div>
      </div>
    </section>
  );
};

export default Mission;
