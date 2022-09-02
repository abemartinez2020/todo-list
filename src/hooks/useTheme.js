import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  //this error checking helps us catch when where using the context hook where the provider hasn't wrapped around.
  if (context === undefined) {
    throw new Error("useTheme() must be used inside a ThemeProvider");
  }

  return context;
};
