import { Avatar, Heading, HStack, Icon, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { boxShadow } from "../../theme/effects/shadow";
import Container from "../Container";
import SocialModal from "../SocialModal";
import { IoMdOpen } from "react-icons/io";
import useUser from "../../hooks/useUser";

interface ProfileProps {
  isWideOrNormalVersion: boolean;
  socialLinks: SocialLink[];
  cvLink?: string;
};

function Profile({ isWideOrNormalVersion, socialLinks, cvLink }: ProfileProps) {
  const { user } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container 
      hoverEffect
      cursorPointer
      onClick={onOpen}
    >
      <SocialModal 
        isOpen={isOpen} 
        onClose={onClose}
        socialLinks={socialLinks}
        cvLink={cvLink}
      />
      <Icon
        m={6}
        as={IoMdOpen}
        position="absolute"
        top={0}
        right={0}
        color="primary.500"
      />
      <HStack spacing={[3, 5]}>
        <Avatar
          name={user.fullname} 
          size={ isWideOrNormalVersion? "lg":"md" } 
          borderWidth={2}
          borderStyle="solid"
          borderColor="primary.500"
          src={user.avatar}
          { ...boxShadow() }
        />
        <VStack spacing={0.1} alignItems="flex-start">
          <Heading
            fontSize={[20, 24]}
            color="primary.500"
            lineHeight={1}
          >
            {user.name}
          </Heading>
          { isWideOrNormalVersion && <Text
            fontSize={[14, 16]}
            color="black"
          >
            {user.fullname}
          </Text> }
          <Text
            fontSize={[12, 14]}
            color="primary.500"
          >
            @{user.username} {isWideOrNormalVersion? '-> ':'- '}
            clique para mais
          </Text>
        </VStack>
      </HStack>
    </Container>
  );
};

export default Profile;