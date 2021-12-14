import { VStack } from "@chakra-ui/react";
import useUser from "../../hooks/useUser";
import { getProgressMessage } from "../../utils/getProgressMessage";
import Container from "../Container";
import ExperienceButtons from "./ExperienceButtons";
import ExperienceItem from "./ExperienceItem";

function Experiences() {
  const { user } = useUser();

  return (
    <>
      <ExperienceButtons/>
      <Container withAccordion startOpen={false} accordionTitle="Experiências">
        <VStack mt={4}>
          {
            user?.technologies.map(technology => {
              return (
                <ExperienceItem 
                  key={`${technology.name}-${technology.points}`}
                  name={technology.name}
                  progress={technology.points}
                  message={getProgressMessage(technology)}
                />
              );
            })
          }
        </VStack>
      </Container>
    </>
  );
};

export default Experiences;