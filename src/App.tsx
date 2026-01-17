import React, { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import LoadingFallback from "./components/loadingFallback/LoadingFallback";

const StockDashboard = lazy(
  () => import("./components/stockDashboard/StockDashboard")
);
const TitleSection = lazy(
  () => import("./components/titleSection/TitleSection")
);
const App: React.FC = () => {
  return (
    <main className={styles.appContainer}>
      <Suspense fallback={<LoadingFallback />}>
        <TitleSection />
        <StockDashboard />
      </Suspense>
    </main>
  );
};

export default App;
