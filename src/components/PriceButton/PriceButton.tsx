import React, { FC } from "react";
import "./style.css";
interface priceButtonProps {
  title: string;
  onPress?: () => void;
  styles?: any;
}
const PriceButton: FC<priceButtonProps> = ({ title, onPress, styles }) => {
  return (
    <>
      <button onClick={onPress} className="priceButton" style={styles}>
        {title}
      </button>
    </>
  );
};
export default PriceButton;
