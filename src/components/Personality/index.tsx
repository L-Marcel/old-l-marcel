import { Divider, List } from "@chakra-ui/react";
import useUser from "../../hooks/useUser";
import Container from "../Container";
import PersonalityItem from "./PersonalityItem";

function Personality() {
  const { user } = useUser();
  const qualities = user.personality.filter(p => p.type === "quality");
  const defects = user.personality.filter(p => p.type === "defect");

  return (
    <Container withAccordion accordionTitle="Qualidades e defeitos">
      <List>
        {
          qualities.map(q => <PersonalityItem key={q.description} personality={q}/>)
        }
      </List>
      { qualities.length > 0 && defects.length > 0 && <Divider my={5}/> }
      <List>
        {
          defects.map(d => <PersonalityItem key={d.description} personality={d}/>)
        }
      </List>
    </Container>
  );
};

export default Personality;