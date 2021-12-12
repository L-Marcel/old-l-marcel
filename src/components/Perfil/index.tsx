import { Avatar, Badge, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { boxShadow } from "../../utils/effects/shadow";
import Container from "../Container";

interface ProfileProps {
  isWideOrNormalVersion: boolean;
};

function Profile({ isWideOrNormalVersion }: ProfileProps) {
  return (
    <Container>
      <HStack spacing={5}>
        <Avatar
          name="Lucas Marcel" 
          size={ isWideOrNormalVersion? "lg":"md" } 
          borderWidth={2}
          borderStyle="solid"
          borderColor="primary.500"
          src="https://avatars.githubusercontent.com/u/62476762?v=4"
          { ...boxShadow() }
        />
        <VStack spacing={0.1} alignItems="flex-start">
          <Heading
            fontSize={[20, 24]}
            color="primary.500"
            lineHeight={1}
          >
            Lucas Brito
          </Heading>
          { isWideOrNormalVersion && <Text
            fontSize={[14, 16]}
            color="black"
          >
            Lucas Marcel Silva de Brito
          </Text> }
          <Text
            fontSize={[12, 14]}
            color="primary.500"
          >
            @l-marcel
          </Text>
        </VStack>
      </HStack>
    </Container>
  );
};

export default Profile;