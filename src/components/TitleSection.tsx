import React from "react";
import { IoTrendingUp, IoSparkles } from "react-icons/io5";
import "./TitleSection.css";

const TitleSection: React.FC = () => {
  return (
    <div className="d-flex flex-column justify-content-center mb-2">
      <h1 className="text-center title-text"><IoTrendingUp className="me-2" /> Stock Market Viewer</h1>
      <p className="text-center subtitle-text">
        Real-time stock data with advanced filtering and sorting <IoSparkles className="ms-1" />
      </p>
    </div>
  );
};

export default TitleSection;
