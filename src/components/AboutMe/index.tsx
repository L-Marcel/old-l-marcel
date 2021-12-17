import { Box, BoxProps, Image } from "@chakra-ui/react";
import styles from "../../theme/scss/about.module.scss";

import Container from "../Container";

interface AboutMeProps extends BoxProps {
  about: string;
};

function AboutMe({ about, ...rest }: AboutMeProps) {
  return (
    <Container withAccordion accordionTitle="Um pouco sobre mim" {...rest}>
      { /*<Image
        src="/banner.gif"
        width="100%"
        maxH={300}
        mb={4}
      />*/ }
      <Box 
        whiteSpace="pre-wrap"
        mr={4}
        fontSize={[14, 16]}
        dangerouslySetInnerHTML={{ __html: about }}
        className={styles.container}
      >
      </Box>
    </Container>
  );
};

export default AboutMe;