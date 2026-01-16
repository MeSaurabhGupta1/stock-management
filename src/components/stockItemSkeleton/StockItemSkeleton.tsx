import React from 'react';
import styles from './StockItemSkeleton.module.css';

const StockItemSkeleton: React.FC = () => {
  return (
    <article className={`${styles.skeletonItem} mb-2 shadow-sm`}>
      <section className="py-2 px-3">
        <div className="row align-items-center">
          <div className="col-md-3">
            <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonTitle}`}></div>
            <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonSubtitle}`}></div>
          </div>
          <div className="col-md-2 text-center">
            <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonPrice}`}></div>
            <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonLabel}`}></div>
          </div>
          <div className="col-md-2 text-center">
            <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonChange}`}></div>
            <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonLabel}`}></div>
          </div>
          <div className="col-md-2 text-center">
            <div className={`${styles.skeleton} ${styles.skeletonBadge}`}></div>
            <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonLabel}`}></div>
          </div>
          <div className="col-md-3 text-center">
            <div className="row">
              <div className="col-6">
                <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonValue}`}></div>
                <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonLabel}`}></div>
              </div>
              <div className="col-6">
                <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonValue}`}></div>
                <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonLabel}`}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default StockItemSkeleton;
