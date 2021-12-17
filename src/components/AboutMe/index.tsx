import { Box, BoxProps, Image, useBreakpointValue } from "@chakra-ui/react";
import styles from "../../theme/scss/about.module.scss";
import { getReadmeCardConfig } from "../../utils/getReadmeCardConfig";

import Container from "../Container";

interface AboutMeProps extends BoxProps {
  about: string;
};

function AboutMe({ about, ...rest }: AboutMeProps) {
  const isWideOrNormalVersion = useBreakpointValue({
    base: false,
    lg: true,
    xl: true,
    md: true
  });

  return (
    <Container withAccordion accordionTitle="Um pouco sobre mim" {...rest}>
      <Image
        src="/banner.gif"
        width="100%"
        maxH={300}
        mb={4}
      />
      <Box 
        whiteSpace="pre-wrap"
        mr={4}
        fontSize={[14, 16]}
        dangerouslySetInnerHTML={{ __html: about }}
        className={styles.container}
      />
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
        h="max-content"
        flexWrap="wrap"
      >
        <Box
          w={["110%", "35%"]}
          ml={-5}
          mb={-5}
          minW={275}
          h={165}
          alt="stats"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgImage={`https://github-readme-stats.vercel.app/api?username=l-marcel&show_icons=true&${getReadmeCardConfig()}`}
        />
        { isWideOrNormalVersion && <Box
          w={["100%", "65%"]}
          maxW={["100%", "100%", "calc(100% - 265px)"]}
          minW={["100%", "100%", 200]}
          bgRepeat="no-repeat"
          bgSize="contain"
          ml={[0, 0, 0, -4, -10]}
          mt={[-4, -6, 0]}
          mb={-5}
          h={[120, 150]}
          alt="langs" 
          bgImage={`https://github-readme-stats.vercel.app/api/top-langs/?username=l-marcel&layout=compact&${getReadmeCardConfig()}`}
        /> }
      </Box>
    </Container>
  );
};

export default AboutMe;