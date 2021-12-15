import { Avatar, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { boxShadow } from "../../theme/effects/shadow";
import Container from "../Container";
import useUser from "../../hooks/useUser";

interface ProfileProps {
  isWideOrNormalVersion: boolean;
};

function Profile({ isWideOrNormalVersion }: ProfileProps) {
  const { user } = useUser();

  return (
    <Container mb={15}>
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
            @{user.username}
          </Text>
        </VStack>
      </HStack>
    </Container>
  );
};

export default Profile;