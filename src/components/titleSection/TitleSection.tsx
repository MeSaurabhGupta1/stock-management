import React from "react";
import { IoTrendingUp } from "react-icons/io5";
import { FaMoneyBillAlt } from "react-icons/fa";
import styles from "./TitleSection.module.css";

const TitleSection: React.FC = () => {
  return (
    <header className={`${styles.titleSectionContainer} d-flex justify-content-between align-items-center`}>
      <h4>
        <FaMoneyBillAlt />
      </h4>
      <h4>
        <IoTrendingUp className="me-2" /> Stock Market Viewer
      </h4>
    </header>
  );
};

export default TitleSection;
