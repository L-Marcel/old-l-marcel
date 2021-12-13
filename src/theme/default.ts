import { extendTheme } from "@chakra-ui/react";
import { boxShadow } from "../utils/effects/shadow";
import colors from "./colors.json";

export const theme = extendTheme({
  colors,
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  styles: {
    global: {
      "*": {
        userSelect: "none",
        transition: "filter .2s linear !important",
      },
      "::-webkit-scrollbar": {
        w: 2,
        mr: -2
      },
      "::-webkit-scrollbar-track": {
        background: colors.primary[100],
        ...boxShadow()
      },
      "::-webkit-scrollbar-thumb": {
        background: colors.primary[400],
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: colors.primary[500],
      },
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
      },
      "input:focus": {
        border: "none",
        boxShadow: "none !important"
      }
    }
  }
});