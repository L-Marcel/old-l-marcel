import { VStack } from "@chakra-ui/react";
import Container from "../Container";
import ExperienceButtons from "./ExperienceButtons";
import ExperienceItem from "./ExperienceItem";

function Experiences() {
  return (
    <>
      <ExperienceButtons/>
      <Container withAccordion startOpen={false} accordionTitle="Experiências">
        <VStack mt={4}>
          <ExperienceItem name="React.js" progress={85}/>
          <ExperienceItem name="Next.js" progress={60}/>
          <ExperienceItem name="TypeScript" progress={75}/>
          <ExperienceItem name="JavaScript" progress={75}/>
          <ExperienceItem name="HTML" progress={80}/>
          <ExperienceItem name="CSS" progress={85}/>
          <ExperienceItem name="SASS" progress={40}/>
          <ExperienceItem name="Git" progress={60}/>
          <ExperienceItem name="Java" progress={20}/>
          <ExperienceItem name="Bash" progress={15}/>
          <ExperienceItem name="Python" progress={20}/>
          <ExperienceItem name="Docker" progress={5}/>
        </VStack>
      </Container>
    </>
  );
};

export default Experiences;