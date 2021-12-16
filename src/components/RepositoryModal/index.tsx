import { Badge, Box, Heading, Text } from "@chakra-ui/react";
import Modal from "../Modal";

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
      bgColor="primary.100"
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
        { repo.importedConfig.links?.figma === "" && <h1>abc</h1> }
      </Box>
    </Modal>
  );
};

export default RepositoryModal;