import { Button, ButtonGroup, useBreakpointValue, useToast } from "@chakra-ui/react";
import { boxShadow } from "../../theme/effects/shadow";
import { customToast } from "../CustomToast";
import Icon from "../Icon";

function ExperienceButtons() {
  const toast = useToast();
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
      { ...isWideOrNormalVersion? null:boxShadow(true) }
    >
      <Button 
        aria-label="historic"
        transition="filter .2s linear"
        leftIcon={<Icon name="calendar"/>}
        size={isWideOrNormalVersion? "md":"sm"}
        onClick={() => {
          const id = 'comming-soon';
          if(!toast.isActive(id)){
            toast(customToast(id, "Essa função se encontra em produção!", "info"));
          };
        }}
        bg="primary.300"
        { ...isWideOrNormalVersion? boxShadow(true):null }
      >
        Histórico
      </Button>
      <Button 
        aria-label="certificates"
        transition="filter .2s linear"
        leftIcon={<Icon name="check"/>}
        size={isWideOrNormalVersion? "md":"sm"}
        onClick={() => {
          const id = 'comming-soon';
          if(!toast.isActive(id)){
            toast(customToast(id, "Essa função se encontra em produção!", "info"));
          };
        }}
        bg="primary.300"
        { ...isWideOrNormalVersion? boxShadow(true):null }
        borderLeft={!isWideOrNormalVersion? "1px black solid":""}
      >
        Certificados
      </Button>
    </ButtonGroup>
  );
};

export default ExperienceButtons;