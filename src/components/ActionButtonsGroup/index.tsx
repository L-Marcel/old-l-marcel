import { Button, ButtonGroup, useDisclosure, useToast } from "@chakra-ui/react";

import { boxShadow } from "../../theme/effects/shadow";
import { customToast } from "../CustomToast";

import Icon from "../Icon";
import SocialModal from "../SocialModal";

interface ActionButtonsGroupProps {
  user: User;
};

function ActionButtonsGroup({ user }: ActionButtonsGroupProps) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          size="md"
          onClick={onOpen}
          bg="primary.200"
          color="primary.500"
        >
          Rede
        </Button>
        <Button 
          aria-label="certificates"
          transition="filter .2s linear"
          leftIcon={<Icon name="check"/>}
          size="md"
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

export default ActionButtonsGroup;