import { Heading, HStack, SimpleGrid, Text, useToast } from "@chakra-ui/react";
import { memo } from "react";
import useFilteredRepositories from "../../hooks/useFilteredRepositories";
import Container from "../Container";
import { customToast } from "../CustomToast";
import Icon from "../Icon";

function _RepositoriesList() {
  const toast = useToast();
  const { filteredRepositories } = useFilteredRepositories();
  
  return (
    <SimpleGrid
      columns={[1, 1, 2, 2, 2, 3]}
      spacing={10}
      maxW="100%"
    >
      {
        filteredRepositories.map(repo => {
          return (
            <Container
              key={repo.id}
              w="100%"
              mb={0}
              textTransform="capitalize"
              display="flex"
              flexDir="column"
              justifyContent="space-between"
              hoverEffect
              cursorPointer
              onClick={() => {
                const id = 'comming-soon';
                if(!toast.isActive(id)){
                  toast(customToast(id, "Essa função se encontra em produção!", "info"));
                };
              }}
            >
              <Heading
                fontSize={[12, 16]}
                lineHeight={[5, 6]}
                color="primary.500"
              >
                {repo.formattedName.slice(0, 28) + "..."}
              </Heading>
              <HStack mt={2} color="primary.500">
                <Icon name={repo.importedConfig.technologies[0]} w={6} h={6}/>
                <Text> {'->'} {repo.importedConfig.technologies[0]}</Text>
              </HStack>
            </Container>
          );
        })
      }
    </SimpleGrid>
  );
};

export const RepositoriesList = memo(_RepositoriesList, (prevProps, nextProps) => {
  return Object.is(prevProps, nextProps);
});