import { IconButton, Modal as ChakraModal, ModalBody, ModalContent, ModalContentProps, ModalOverlay } from "@chakra-ui/react";
import { ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { boxShadow } from "../../utils/effects/shadow";

interface SocialModalProps extends ModalContentProps {
  onClose: () => void,
  isOpen: boolean,
  children?: ReactNode,
};

function Modal({ isOpen, onClose, children, ...rest }: SocialModalProps) {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent {...rest}>
        <IconButton 
          variant="ghost"
          position="absolute"
          right={6}
          top={6}
          w={38}
          h={38}
          bg="primary.200" 
          aria-label="close-media-modal" 
          icon={<AiOutlineClose/>} 
          onClick={onClose}
          color="primary.500"
          {...boxShadow(true)}
        />
        <ModalBody p={0}>
          { children}
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;