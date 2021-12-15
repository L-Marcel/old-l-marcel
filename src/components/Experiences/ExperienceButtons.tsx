import { Button, ButtonGroup, useDisclosure, useToast } from "@chakra-ui/react";
import useUser from "../../hooks/useUser";
import { boxShadow } from "../../theme/effects/shadow";
import { customToast } from "../CustomToast";
import Icon from "../Icon";
import SocialModal from "../SocialModal";

function ExperienceButtons() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useUser();

  return (
    <>
      <SocialModal 
        isOpen={isOpen} 
        onClose={onClose}
        socialLinks={user.links}
        cvLink={user.cv}
      />
      <ButtonGroup 
        mx="auto"
        isAttached
        spacing={[0, 5]}
        mb={15}
        zIndex={5}
        { ...boxShadow() }
      >
        <Button 
          aria-label="share"
          transition="filter .2s linear"
          leftIcon={<Icon name="share"/>}
          size="sm"
          onClick={onOpen}
          bg="primary.200"
          color="primary.500"
        >
          Rede
        </Button>
        <Button 
          aria-label="historic"
          transition="filter .2s linear"
          leftIcon={<Icon name="calendar"/>}
          size="sm"
          onClick={() => {
            const id = 'comming-soon';
            if(!toast.isActive(id)){
              toast(customToast(id, "Essa função se encontra em produção!", "info"));
            };
          }}
          color="red.500"
          bg="red.300"
          borderLeft="1px black solid"
          borderColor="red.500"
        >
          Histórico
        </Button>
        <Button 
          aria-label="certificates"
          transition="filter .2s linear"
          leftIcon={<Icon name="check"/>}
          size="sm"
          onClick={() => {
            const id = 'comming-soon';
            if(!toast.isActive(id)){
              toast(customToast(id, "Essa função se encontra em produção!", "info"));
            };
          }}
          color="red.500"
          bg="red.300"
          borderLeft="1px black solid"
          borderColor="red.500"
        >
          Certificados
        </Button>
      </ButtonGroup>
    </>
  );
};

export default ExperienceButtons;