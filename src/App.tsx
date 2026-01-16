import React from "react";
import StockDashboard from "./components/stockDashboard/StockDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import TitleSection from "./components/titleSection/TitleSection";

const App: React.FC = () => {
  return (
    <main className={styles.appContainer}>
      <TitleSection />
      <StockDashboard />
    </main>
  );
};

export default App;
