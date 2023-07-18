import React, { FC } from "react";

// styles
import "./style.css";

interface buttonProps {
  title: string;
  onPress?: () => void;
  styles?: any;
}
const Button: FC<buttonProps> = ({ title, onPress, styles }) => {
  return (
    <div className={styles}>
      <button className={styles} onClick={onPress}>
        {title}
      </button>
    </div>
  );
};
export default Button;
