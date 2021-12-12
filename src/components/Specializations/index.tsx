import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, VStack } from "@chakra-ui/react";
import Container from "../Container";
import SpecializationButtons from "./SpecializationButtons";
import SpecializationItem from "./SpecializationItem";

function Specializations() {
  return (
    <>
      <SpecializationButtons/>
      <Container withAccordion accordionTitle="Especializações">
        <VStack mt={4}>
          <SpecializationItem name="React.js" progress={85}/>
          <SpecializationItem name="Next.js" progress={60}/>
          <SpecializationItem name="TypeScript" progress={75}/>
          <SpecializationItem name="JavaScript" progress={75}/>
          <SpecializationItem name="HTML" progress={80}/>
          <SpecializationItem name="CSS" progress={85}/>
          <SpecializationItem name="SASS" progress={40}/>
          <SpecializationItem name="Git" progress={60}/>
          <SpecializationItem name="Java" progress={20}/>
          <SpecializationItem name="Bash" progress={15}/>
          <SpecializationItem name="Python" progress={20}/>
          <SpecializationItem name="Docker" progress={5}/>
        </VStack>
      </Container>
    </>
  );
};

export default Specializations;