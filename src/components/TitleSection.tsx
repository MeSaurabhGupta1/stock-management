import React from "react";
import { IoTrendingUp } from "react-icons/io5";
import { FaMoneyBillAlt } from "react-icons/fa";
import "./TitleSection.css";

const TitleSection: React.FC = () => {
  return (
    <div className="title-section-container d-flex justify-content-between align-items-center">
      <h4>
        <FaMoneyBillAlt />
      </h4>
      <h4>
        <IoTrendingUp className="me-2" /> Stock Market Viewer
      </h4>
    </div>
  );
};

export default TitleSection;
