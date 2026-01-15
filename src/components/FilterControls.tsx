import React from "react";
import { IoCashOutline, IoTrendingUp } from "react-icons/io5";

interface MinCurrentPriceProps {
  value: number;
  onChange: (value: number) => void;
}

export const MinCurrentPrice: React.FC<MinCurrentPriceProps> = ({
  value,
  onChange,
}) => {
  return (
    <>
      <label className="form-label small fw-bold text-white mb-0">
        <IoCashOutline className="me-1" /> Min Current Price
      </label>
      <input
        type="number"
        className="form-control modern-input"
        placeholder="e.g., 100"
        value={value || ""}
        onChange={(e) =>
          onChange(e.target.value === "" ? 0 : parseFloat(e.target.value))
        }
        min="0"
        step="0.01"
      />
    </>
  );
};

interface MinPercentageChangeProps {
  value: number;
  onChange: (value: number) => void;
}

export const MinPercentageChange: React.FC<MinPercentageChangeProps> = ({
  value,
  onChange,
}) => {
  return (
    <>
      <label className="form-label small fw-bold text-white mb-0">
        <IoTrendingUp className="me-1" /> Min % Change
      </label>
      <input
        type="number"
        className="form-control modern-input"
        placeholder="e.g., 5"
        value={value || ""}
        onChange={(e) =>
          onChange(e.target.value === "" ? 0 : parseFloat(e.target.value))
        }
        min="0"
        step="0.01"
      />
    </>
  );
};
