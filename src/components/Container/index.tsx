import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, BoxProps } from "@chakra-ui/react";
import { bgBlur } from "../../utils/effects/blur";

interface ContainerProps extends BoxProps {
  withAccordion?: boolean;
  accordionTitle?: string;
};

function Container({ children, withAccordion = false, accordionTitle = "", ...rest }: ContainerProps) {
  if(!withAccordion) {
    return (
      <Box
        {...bgBlur() as any}
        mb={[30, 50]}
        p={30}
        w={["auto", "auto", "auto", 380]}
        {...rest}
      >
        {children}
      </Box>
    );
  };

  return (
    <Box
      {...bgBlur() as any}
      mb={[30, 50]}
      p={30}
      w={["auto", "auto", "auto", 380]}
      {...rest}
    >
      <Accordion allowToggle defaultIndex={0}>
        <AccordionItem border="none" index={0}>
          <h2>
            <AccordionButton
              p={0}
              color="primary.500"
              fontWeight="bold"
              fontSize={[14, 19]}
              _hover={{
                bg: "transparent"
              }}
            >
              <Box flex='1' textAlign='left'>
                {accordionTitle}
              </Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel mt={4} p={0}>
            {children}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Container;
