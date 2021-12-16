import { ListIcon, ListItem } from "@chakra-ui/react";

import { AiOutlineCheck } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";

interface PersonalityItemProps {
  personality: Personality;
};

function PersonalityItem({ personality }: PersonalityItemProps) {
  return (
    <ListItem
      fontSize={[14, 16]}
    >
      <ListIcon 
        as={personality.type === "quality"? AiOutlineCheck:VscChromeClose} 
        color={personality.type === "quality"? "primary.500":"red"}
        mb="1.5px"
      />
      {personality.description}
    </ListItem>
  );
};

export default PersonalityItem;