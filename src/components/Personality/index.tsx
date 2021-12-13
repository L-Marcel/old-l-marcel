import { Divider, List } from "@chakra-ui/react";
import Container from "../Container";
import PersonalityItem from "./PersonalityItem";

function Personality() {
  return (
    <Container withAccordion accordionTitle="Qualidades e defeitos">
      <List>
        <PersonalityItem type="quality" description="Proativo"/>
        <PersonalityItem type="quality" description="Criativo"/>
        <PersonalityItem type="quality" description="Explorador"/>
        <PersonalityItem type="quality" description="Aberto a novas possibilidades"/>
        <PersonalityItem type="quality" description="Dedicado"/>
        <PersonalityItem type="quality" description="Focado em evoluir"/>
      </List>
      <Divider my={5}/>
      <List>
        <PersonalityItem type="defect" description="Sedentário"/>
        <PersonalityItem type="defect" description="Tímido"/>
        <PersonalityItem type="defect" description="Com humor variado"/>
      </List>
    </Container>
  );
};

export default Personality;