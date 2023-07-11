import React, { FC } from "react";
import Collapsible from "react-collapsible";
interface CollapsibleProps {
  trigger: string;
  title: string;
}
const Collapsib: FC<CollapsibleProps> = ({ trigger, title }) => {
  return (
    <>
      <Collapsible trigger={trigger}>
        <p>{title}</p>
      </Collapsible>
    </>
  );
};

export default Collapsib;
