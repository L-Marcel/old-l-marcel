import { ButtonGroup, useDisclosure } from "@chakra-ui/react";

import { boxShadow } from "../../theme/effects/shadow";
import Button from "../Button";

import SocialModal from "../SocialModal";

interface ActionButtonsGroupProps {
  user: User;
};

function ActionButtonsGroup({ user }: ActionButtonsGroupProps) {
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
        mb={30}
        mt="-30px"
        zIndex={5}
        { ...boxShadow() }
      >
        <Button
          aria-label="share"
          icon="share"
          onClick={onOpen}
        >
          Rede
        </Button>
        <Button 
          aria-label="certificates"
          icon="certificate"
          onClick={() => {
  
          }}
        >
          Certificados
        </Button>
      </ButtonGroup>
    </>
  );
};

export default ActionButtonsGroup;