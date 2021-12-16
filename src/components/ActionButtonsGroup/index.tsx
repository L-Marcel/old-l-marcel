import { ButtonGroup, useDisclosure, useToast } from "@chakra-ui/react";

import { boxShadow } from "../../theme/effects/shadow";
import Button from "../Button";
import { customToast } from "../CustomToast";

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
          icon="check"
          onClick={() => {
            const id = 'comming-soon';
            if(!toast.isActive(id)){
              toast(customToast(id, "Essa função se encontra em produção!", "info"));
            };
          }}
        >
          Certificados
        </Button>
      </ButtonGroup>
    </>
  );
};

export default ActionButtonsGroup;