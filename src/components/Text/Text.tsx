import React, { FC } from "react";

interface TextProps {
  title: string;
  color: string;

  styles?: any;
}
const Text: FC<TextProps> = ({ title, color, styles }) => {
  return (
    <>
      <p className={styles} style={{ color: color }}>
        {title}
      </p>
    </>
  );
};

export default Text;
