import { HStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Container from "../Container";

function Search() {
  return (
    <HStack>
      <Container
        maxW={["auto", 250, 300, 300]}
        p={0}
        color="primary.500"
        hoverEffect
      >
        <InputGroup>
          <InputLeftElement
            minH={50}
            ml={2}
            w={10}
            children={<FaSearch/>}
          />
          <Input 
            pl={45} 
            minH={50} 
            border="none"
            placeholder="Pesquisar"
          />
        </InputGroup>
      </Container>
      { /*<SearchFilters/>*/ }
    </HStack>
  );
};

export default Search;