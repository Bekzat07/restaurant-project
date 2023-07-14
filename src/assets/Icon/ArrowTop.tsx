import * as React from "react";
import { SVGProps } from "react";
const ArrowTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M2.556 8.27a1.563 1.563 0 0 1 2.21 0l7.734 7.735 7.734-7.735a1.563 1.563 0 0 1 2.21 2.21l-8.84 8.839a1.562 1.562 0 0 1-2.209 0l-8.839-8.84a1.562 1.562 0 0 1 0-2.209Z"
    />
  </svg>
);
export default ArrowTop;
