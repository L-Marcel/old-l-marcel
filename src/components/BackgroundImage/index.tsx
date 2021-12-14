import { Box } from "@chakra-ui/react";

function BackgroundImage() {
  return (
    <>
      <Box
        bg="primary.200"
        position="fixed"
        w={900}
        h={1200}
        right={-500}
        top={-100}
        transform="rotate(-11.15deg)"
        zIndex={-9999}
      />
      <Box
        bg="primary.300"
        position="fixed"
        w={1200}
        h={900}
        right={-500}
        bottom={-650}
        transform="rotate(-35.68deg)"
        zIndex={-9999}
      />
    </>
  );
};

export default BackgroundImage;