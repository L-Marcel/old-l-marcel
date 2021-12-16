
import Button from "../Button";

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
    <Button
      aria-label="share"
      icon={icon}
      link={link}
    >
      {title}
    </Button>
  );
};

export default RepositoryModalLinkButton;