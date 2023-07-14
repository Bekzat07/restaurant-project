import React, { FC } from "react";

import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { CollapsibleProps } from "react-collapsible";
import "./style.css";
import ArrowTop from "../../assets/Icon/ArrowTop";
interface collabsibeProps {
  itemButton: string;
}

const Accordions: FC<collabsibeProps> = ({ itemButton }) => {
  return (
    <AccordionItem>
      <div className="containerArrow">
        <AccordionItemHeading className="AccordionItemHeading">
          <AccordionItemButton className="accorddionButton">
            {itemButton}
          </AccordionItemButton>
        </AccordionItemHeading>
        <ArrowTop />
      </div>
      <AccordionItemPanel className="AccordionItemPanel">
        <p>
          Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat
          ut occaecat consequat est minim minim esse tempor laborum consequat
          esse adipisicing eu reprehenderit enim.
        </p>
      </AccordionItemPanel>
    </AccordionItem>
  );
};
export default Accordions;
