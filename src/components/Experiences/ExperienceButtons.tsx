import { Button, ButtonGroup, useBreakpointValue } from "@chakra-ui/react";
import { boxShadow } from "../../utils/effects/shadow";
import Icon from "../Icon";

function ExperienceButtons() {
  const isWideOrNormalVersion = useBreakpointValue({
    lg: true,
    xl: true,
    base: false
  });

  return (
    <ButtonGroup 
      mb={-4}
      mt={-4}
      ml={30}
      isAttached={!isWideOrNormalVersion}
      spacing={[0, 5]}
      zIndex={5}
    >
      <Button 
        aria-label="historic"
        transition="filter .2s linear"
        leftIcon={<Icon name="calendar"/>}
        size={isWideOrNormalVersion? "md":"sm"}
        bg="primary.300"
        { ...boxShadow(true) }
      >
        Histórico
      </Button>
      <Button 
        aria-label="certificates"
        transition="filter .2s linear"
        leftIcon={<Icon name="check"/>}
        size={isWideOrNormalVersion? "md":"sm"}
        bg="primary.300"
        { ...boxShadow(true) }
      >
        Certificados
      </Button>
    </ButtonGroup>
  );
};

export default ExperienceButtons;