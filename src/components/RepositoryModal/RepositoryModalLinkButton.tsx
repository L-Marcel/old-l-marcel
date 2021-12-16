import { Button } from "@chakra-ui/react";
import Icon from "../Icon";

interface RepositoryModalLinkButtonProps {
  link: string;
  title: string;
  icon: string;
};

function RepositoryModalLinkButton({
  link,
  title,
  icon
}: RepositoryModalLinkButtonProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Button
        aria-label="share"
        transition="filter .2s linear"
        leftIcon={<Icon name={icon}/>}
        size="md"
        bg="primary.200"
        color="primary.500"
      >
        {title}
      </Button>
    </a>
  );
};

export default RepositoryModalLinkButton;