import { ListIcon, ListItem } from "@chakra-ui/react";
import { AiOutlineCheck } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";

interface PersonalityItemProps {
  type: "quality" | "defect";
  description: string;
};

function PersonalityItem({ type, description }: PersonalityItemProps) {
  return (
    <ListItem
      fontSize={[14, 16]}
    >
      <ListIcon 
        as={type === "quality"? AiOutlineCheck:VscChromeClose} 
        color={type === "quality"? "primary.500":"red"}
        mb="1.5px"
      />
      {description}
    </ListItem>
  );
};

export default PersonalityItem;