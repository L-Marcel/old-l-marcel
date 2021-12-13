import { BoxProps } from "@chakra-ui/react";
import { boxShadow } from "./shadow";

interface BgBlurOptions extends BoxProps { 
  hoverEffect?: boolean,
  cursorPointer?: boolean; 
};

function bgBlur({ 
  bg = "white", 
  opacity = 0.45, 
  hoverEffect = false, 
  cursorPointer = false, 
  borderRadius = 15,
  ...rest
}: BgBlurOptions) {
  return {
    position: "relative",
    bg: "transparent",
    _before: {
      content: `""`,
      position: "absolute",
      top: 0,
      left: 0,
      w: "100%",
      h: "100%",
      zIndex: -5,
      backdropFilter: "blur(4px)",
      opacity,
      bg,
      borderRadius,
      ...rest,
      ...boxShadow(),
    },
    _hover: hoverEffect && {
      filter: "brightness(0.92)",
      cursor: cursorPointer? "pointer":null
    },
  };
};

export { bgBlur };