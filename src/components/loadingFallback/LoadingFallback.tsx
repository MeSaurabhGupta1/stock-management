import React from "react";
import styles from "./LoadingFallback.module.css";

const LoadingFallback: React.FC = () => {
  return (
    <div className={styles.fallbackContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.loadingText}>Loading...</p>
    </div>
  );
};

export default LoadingFallback;
