import { IconButton, Modal as ChakraModal, ModalBody, ModalContent, ModalContentProps, ModalOverlay } from "@chakra-ui/react";
import { ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { boxShadow } from "../../theme/effects/shadow";

interface SocialModalProps extends ModalContentProps {
  onClose: () => void,
  isOpen: boolean,
  children?: ReactNode,
};

function Modal({ isOpen, onClose, children, ...rest }: SocialModalProps) {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent 
        bgImage="/background.png"
        {...rest} 
        my={[null, "auto"]}
      >
        <IconButton 
          variant="ghost"
          position="absolute"
          right={[5, 6]}
          top={[5, 6]}
          w={[6, 38]}
          h={[6, 38]}
          minW={6}
          bg="primary.500"
          aria-label="close-media-modal" 
          icon={<AiOutlineClose/>} 
          onClick={onClose}
          color="white"
          {...boxShadow()}
          _hover={{
            color: "primary.500",
            bg: "primary.200"
          }}
        />
        <ModalBody p={0} my="auto">
          { children}
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;