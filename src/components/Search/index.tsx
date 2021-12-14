import { HStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import useFilterOptions from "../../hooks/useFilterOptions";
import Container from "../Container";

function Search() {
  const { filterOptions, setFilterOptions } = useFilterOptions();
  const [isStycked, setIsStycked] = useState(false);

  function onChangeQuery(q: string) {
    setFilterOptions({
      ...filterOptions,
      query: q
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      setIsStycked(e.intersectionRatio < 1);
    }, {
      rootMargin: "-50px 0px 0px 0px",
      threshold: [1],
    });

    let element = document.getElementById("search-group")
    observer.observe(element);
  }, []);

  return (
    <HStack
      id="search-group"
      position="sticky"
      mt={-35}
      top={-35}
      pt={35}
      zIndex={30}
    >
      <Container
        maxW={["auto", 250, 300, 300]}
        p={0}
        color="primary.500"
        hoverEffect
        stickyMode={isStycked}
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
            value={filterOptions.query}
            onChange={e => onChangeQuery(e.currentTarget.value)}
          />
        </InputGroup>
      </Container>
      { /*<SearchFilters/>*/ }
    </HStack>
  );
};

export default Search;