import { Badge, Box, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import Modal from "../Modal";
import RepositoryModalButtonsGroup from "./RepositoryModalButtonsGroup";
import RepositoryModalLinkButton from "./RepositoryModalLinkButton";

interface RepositoryProps {
  onClose: () => void;
  isOpen: boolean;
  repo: Repository;
};

function RepositoryModal({ isOpen, onClose, repo }: RepositoryProps) {
  const isWideOrNormalVersion = useBreakpointValue({
    lg: true,
    base: false
  });
  
  return (
    <Modal
      borderRadius={8}
      isOpen={isOpen} 
      onClose={onClose}
      position="relative"
      bgColor="primary.100"
      minW="min-content"
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
        <RepositoryModalButtonsGroup isWideOrNormalVersion={isWideOrNormalVersion}>
          { repo.github && <RepositoryModalLinkButton
            link={repo.github} 
            title="Repositório" icon="github"
          /> }
          { repo.importedConfig.links?.figma && <RepositoryModalLinkButton
            link={repo.importedConfig.links?.figma} 
            title="Figma" icon="figma"
          /> }
          { repo.importedConfig.links?.self && <RepositoryModalLinkButton
            link={repo.importedConfig.links?.self} 
            title="Visitar" icon="self"
          /> }
          { repo.importedConfig.links?.documentation && <RepositoryModalLinkButton
            link={repo.importedConfig.links?.documentation} 
            title="Documentação" 
            icon="documentation"
          /> }
        </RepositoryModalButtonsGroup>
        { repo.license && <></> }
      </Box>
    </Modal>
  );
};

export default RepositoryModal;