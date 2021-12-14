import { BoxProps } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const _rotate = keyframes`
from { transform: rotate(0deg) };
to { transform: rotate(360deg) };
`;

function infinityRotate() {
  return {
    animation: `${_rotate} infinite 10s linear`
  };
};

export { infinityRotate };