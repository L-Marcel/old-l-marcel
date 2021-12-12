import { extendTheme } from "@chakra-ui/react";
import colors from "./colors.json";

export const theme = extendTheme({
  colors,
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: colors.primary[100],
        h: "100vh",
        w: "100vw",
        overflow: "hidden"
      },
      "button:hover": {
        filter: "brightness(0.95)"
      },
      "div[role='progressbar']": {
        bg: colors.primary[500]
      },
      ".js-focus-visible :focus:not([data-focus-visible-added])": {
        outline: "none"
      }
    }
  }
});