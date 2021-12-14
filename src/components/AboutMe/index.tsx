import { Box, BoxProps, Text } from "@chakra-ui/react";
import useUser from "../../hooks/useUser";
import Container from "../Container";
import styles from "../../theme/scss/about.module.scss";

function AboutMe({ ...rest }: BoxProps) {
  const { user } = useUser();

  return (
    <Container withAccordion accordionTitle="Um pouco sobre mim" {...rest}>
      <Box 
        whiteSpace="pre-wrap"
        mr={4}
        fontSize={[14, 16]}
        dangerouslySetInnerHTML={{ __html: user.about }}
        className={styles.container}
      >
      </Box>
    </Container>
  );
};

export default AboutMe;