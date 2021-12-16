import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import Icon from "../Icon";

import style from "../../theme/scss/button.module.scss";

interface ButtonProps extends ChakraButtonProps {
  icon?: string;
  link?: string;
};

function Button({ icon, link, ...rest }: ButtonProps) {
  return (
    <ChakraButton 
      transition="filter .2s linear"
      leftIcon={<Icon name={icon}/>}
      size="md"
      bg="primary.500"
      color="white"
      onClick={() => window.open(link, "_blank", "")}
      {...rest}
      className={style.button}
    >
      {rest.children}
    </ChakraButton>
  );
};

export default Button;