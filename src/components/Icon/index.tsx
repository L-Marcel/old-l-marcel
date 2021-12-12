import { Icon as ChakraIcon, IconProps as ChakraIconProps } from "@chakra-ui/react";
import { FaReact, FaNode, FaDocker, FaGitAlt, FaJava, FaPython } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiJavascript, SiGnubash } from "react-icons/si";
import { DiCss3, DiSass } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { RiFlutterFill } from "react-icons/ri";
import { BsQuestionCircle } from "react-icons/bs";
import { AiOutlineCalendar, AiOutlineCheck } from "react-icons/ai";

interface IconProps extends ChakraIconProps {
  name?: string;
};

const icons = {
  "react.js": FaReact,
  "node.js": FaNode,
  "typescript": SiTypescript,
  "next.js": SiNextdotjs,
  "html": AiFillHtml5,
  "css": DiCss3,
  "sass": DiSass,
  "javascript": SiJavascript,
  "docker": FaDocker,
  "flutter": RiFlutterFill,
  "java": FaJava,
  "git": FaGitAlt,
  "python": FaPython,
  "bash": SiGnubash,
  "default": BsQuestionCircle,
  "calendar": AiOutlineCalendar,
  "check": AiOutlineCheck
};

function Icon({ name = "default", ...rest }: IconProps) {
  const icon = icons[name.toLowerCase()] ?? icons["default"];
  return (
    <ChakraIcon as={icon} {...rest}/>
  );
};

export default Icon;