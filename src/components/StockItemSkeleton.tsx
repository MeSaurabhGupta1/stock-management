import React from 'react';
import './StockItemSkeleton.css';

const StockItemSkeleton: React.FC = () => {
  return (
    <div className="card mb-2 shadow-sm stock-item-compact skeleton-item">
      <div className="card-body py-2 px-3">
        <div className="row align-items-center">
          <div className="col-md-3">
            <div className="skeleton skeleton-text skeleton-title"></div>
            <div className="skeleton skeleton-text skeleton-subtitle"></div>
          </div>
          <div className="col-md-2 text-center">
            <div className="skeleton skeleton-text skeleton-price"></div>
            <div className="skeleton skeleton-text skeleton-label"></div>
          </div>
          <div className="col-md-2 text-center">
            <div className="skeleton skeleton-text skeleton-change"></div>
            <div className="skeleton skeleton-text skeleton-label"></div>
          </div>
          <div className="col-md-2 text-center">
            <div className="skeleton skeleton-badge"></div>
            <div className="skeleton skeleton-text skeleton-label"></div>
          </div>
          <div className="col-md-3 text-center">
            <div className="row">
              <div className="col-6">
                <div className="skeleton skeleton-text skeleton-value"></div>
                <div className="skeleton skeleton-text skeleton-label"></div>
              </div>
              <div className="col-6">
                <div className="skeleton skeleton-text skeleton-value"></div>
                <div className="skeleton skeleton-text skeleton-label"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockItemSkeleton;
