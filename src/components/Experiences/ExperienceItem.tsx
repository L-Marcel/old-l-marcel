import { HStack, Progress, Tooltip } from "@chakra-ui/react";
import { boxShadow } from "../../utils/effects/shadow";
import { getProgressMessage } from "../../utils/getProgressMessage";
import Icon from "../Icon";

interface ExperienceItemProps {
  name: string;
  progress?: number;
};

function ExperienceItem({ name, progress = 0 }: ExperienceItemProps) {
  return (
    <Tooltip 
      hasArrow 
      arrowSize={10}
      bg="primary.400"
      label={`${name} -> ${getProgressMessage(progress)}`}
      { ...boxShadow() }
    >
      <HStack w="100%">
        <Icon 
          name={name}
          width={6} 
          height={6} 
          mr={1} 
          color="primary.500"
        />
        <Progress 
          value={progress} 
          w="100%"
          size="sm" 
          bg={["primary.300", "primary.200"]}
        />
      </HStack>
    </Tooltip>
  );
};

export default ExperienceItem;