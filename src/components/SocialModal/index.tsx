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
  const needFooter = links.length > 6 || cvLink;

  return (
    <Modal
      borderRadius={8}
      isOpen={isOpen} 
      onClose={onClose}
      minH={needFooter? 0:"auto"}
      position="relative"
      bgImage="/social_modal_footer_bg.png"
      bgSize="initial"
      bgPos="85px max(50% + 200px, 100% + 65px)"
      bgColor="primary.100"
      bgRepeat="no-repeat"
      m={4}
    >
      <VStack
        borderTopRadius={6}
        borderBottomRadius={needFooter? 0:6}
        minH="max-content"
        bgRepeat="no-repeat"
        alignItems="flex-start"
        spacing={4}
        p={6}
        bgImage="/social_modal_bg.jpg"
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
      </VStack>
      <VStack
        p={needFooter? 6:0}
        spacing={4}
        alignItems="flex-start"
      >
        {
          links.map(s => {
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