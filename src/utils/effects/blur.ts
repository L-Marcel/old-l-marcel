import { boxShadow } from "./shadow";

function bgBlur(bg?: string, opacity?: number) {
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
      opacity: opacity ?? 0.45,
      bg: bg ?? "white",
      borderRadius: 15,
      ...boxShadow()
    }
  };
};

export { bgBlur };