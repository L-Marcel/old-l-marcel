import { Flex, useBreakpointValue } from "@chakra-ui/react";
import AboutMe from "../components/AboutMe";
import Container from "../components/Container";
import Profile from "../components/Perfil";
import Specializations from "../components/Specializations";

export default function Home() {
  const isWideOrNormalVersion = useBreakpointValue({
    lg: true,
    xl: true,
    base: false
  });

  const orderedContainers = [
    <Specializations/>,
    <AboutMe w="100%"/>
  ];

  return (
    <Flex
      justifyContent="space-between"
      flexDir={["column", "column", "column", "row"]}
      h="100vh"
      overflowX="auto"
      p={[30, 50]}
    >
      <Flex flexDir="column">
        <Profile isWideOrNormalVersion={isWideOrNormalVersion}/>
        { orderedContainers[isWideOrNormalVersion? 0:1] }
      </Flex>
      <Flex flexDir="column"
        ml={[0, 0, 0, 50]}
        flex={[null, "1"]}
      >
        { orderedContainers[isWideOrNormalVersion? 1:0] }
        <Container h={200} w="100%">
          <h1>abc</h1>
        </Container>
      </Flex>
    </Flex>
  );
};
