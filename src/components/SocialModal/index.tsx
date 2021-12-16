import { VStack } from "@chakra-ui/react";

import Modal from "../Modal";
import SocialModalItem from "./SocialModaItem";

interface SocialModalProps {
  onClose: () => void;
  isOpen: boolean;
  socialLinks: SocialLink[];
  cvLink?: string;
};

function SocialModal({ isOpen, onClose, socialLinks, cvLink }: SocialModalProps) {
  const firstLinks = socialLinks.slice(0, 4);
  const links = socialLinks.slice(4, socialLinks.length);

  return (
    <Modal
      borderRadius={8}
      isOpen={isOpen} 
      onClose={onClose}
      minH="auto"
      position="relative"
      bgColor="primary.100"
      m={4}
    >
      <VStack
        borderTopRadius={6}
        borderBottomRadius={6}
        minH="max-content"
        bgRepeat="no-repeat"
        alignItems="flex-start"
        spacing={4}
        p={6}
        bgSize="cover"
      >
        {
          firstLinks.map(s => {
            return (
              <SocialModalItem
                key={s.name}
                link={s.link} 
                media={s.name}
                type={s.type}
              />
            );
          })
        }
        { cvLink && <SocialModalItem
          link={cvLink} 
          media="Currículo Virtual"
        /> }
      </VStack>
    </Modal>
  );
};

export default SocialModal;