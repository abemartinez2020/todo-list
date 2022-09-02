import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { WiMoonAltWaningGibbous3 } from "react-icons/wi";

export default function ToolBar() {
  return (
    <div className="mb-4  position-relative">
      <h2 className="text-center">
        <BsCheck2Circle className="me-2" />
        U-Do
      </h2>
      <h5 className="position-absolute top-0 end-0">
        <WiMoonAltWaningGibbous3 />
      </h5>
    </div>
  );
}
