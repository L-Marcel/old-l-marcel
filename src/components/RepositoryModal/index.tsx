import { Badge, Box, ButtonGroup, Heading, Text } from "@chakra-ui/react";
import { boxShadow } from "../../theme/effects/shadow";
import Modal from "../Modal";
import RepositoryModalLinkButton from "./RepositoryModalLinkButton";

interface RepositoryProps {
  onClose: () => void;
  isOpen: boolean;
  repo: Repository;
};

function RepositoryModal({ isOpen, onClose, repo }: RepositoryProps) {
  return (
    <Modal
      borderRadius={8}
      isOpen={isOpen} 
      onClose={onClose}
      position="relative"
      bgColor="white"
      boxSize="xl"
      m={4}
      p={[6, 10]}
    >
      <Box>
        <Heading
          maxWidth="80%"
          fontSize={[18, 25]}
          color="primary.500"
          textTransform="capitalize"
        >
          {repo.formattedName}
        </Heading>
        { repo.badge && <Badge
          fontSize={[10, 12]} 
          lineHeight={[2, 6]}
          px={2}
          bgColor="primary.500" 
          color="white"
          w="min-content"
          my={2}
        >
          {repo.badge}
        </Badge> }
        { repo.description && <Text
          mt={5}
        >
          {repo.description}
        </Text> }
        <ButtonGroup 
          mx="auto"
          spacing={[0, 5]}
          my={5}
          zIndex={5}
          isAttached
          { ...boxShadow() }
        >
          { repo.github && <RepositoryModalLinkButton
            link={repo.github} title="Repositório" icon="github"
          /> }
          { repo.importedConfig.links?.figma && <RepositoryModalLinkButton
            link={repo.importedConfig.links?.figma} title="Figma" icon="figma"
          /> }
          { repo.importedConfig.links?.self && <RepositoryModalLinkButton
            link={repo.importedConfig.links?.self} title="Visitar" icon="self"
          /> }
        </ButtonGroup>
        { repo.license && <h1>{repo.license.id}</h1>}
      </Box>
    </Modal>
  );
};

export default RepositoryModal;