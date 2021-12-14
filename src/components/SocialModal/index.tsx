import { VStack } from "@chakra-ui/react";
import { useState } from "react";
import Modal from "../Modal";
import SocialModalItem from "./SocialModaItem";

interface SocialModalProps {
  onClose: () => void;
  isOpen: boolean;
  socialLinks: SocialLink[];
  cvLink?: string;
};

function SocialModal({ isOpen, onClose, socialLinks, cvLink }: SocialModalProps) {
  const defaultImage = socialLinks.length > 0 ? socialLinks[0].background ?? "":"";
  const [image, setImage] = useState(defaultImage);
  const firstLinks = socialLinks.slice(0, 4);
  const links = socialLinks.slice(4, socialLinks.length);
  const needFooter = links.length > 6 || cvLink;

  function updateBackgroundImage(image: string) {
    const _image = new Image();
    _image.src = image;
    _image.onload = () => {
      setImage(image);
    };
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      minH={needFooter? 0:"auto"}
      position="relative"
      bgImage="social_modal_bg_image.svg"
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
        bgImage={image}
      >
        {
          firstLinks.map(s => {
            return (
              <SocialModalItem
                key={s.name}
                onChangeTarget={() => updateBackgroundImage(s.background)}
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
                onChangeTarget={() => setImage(s.background)}
                link={s.link} 
                media={s.name} 
                type={s.type}
              />
            );
          })
        }
        { cvLink && <SocialModalItem
          onChangeTarget={() => {}}
          link={cvLink} 
          media="Currículo Virtual"
        /> }
      </VStack>
    </Modal>
  );
};

export default SocialModal;