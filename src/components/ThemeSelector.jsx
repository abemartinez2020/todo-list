import React from "react";
import { WiMoonAltWaningGibbous3 } from "react-icons/wi";
import { useTheme } from "../hooks/useTheme";

export default function ThemeSelector() {
  const { toggleDarkMode } = useTheme();
  return (
    <>
      <h5 className="position-absolute top-0 end-0">
        <WiMoonAltWaningGibbous3 onClick={toggleDarkMode} />
      </h5>
    </>
  );
}
