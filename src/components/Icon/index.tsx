import { Icon as ChakraIcon, IconProps as ChakraIconProps } from "@chakra-ui/react";
import { 
  FaReact, FaLinkedinIn, FaGithubAlt, FaDocker, FaGitAlt, 
  FaJava, FaPython, FaDiscord, FaFacebookF
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiGnubash } from "react-icons/si";
import { DiCss3, DiSass } from "react-icons/di";
import { AiFillHtml5, AiFillYoutube } from "react-icons/ai";
import { RiFlutterFill } from "react-icons/ri";
import { BsQuestionCircle, BsCheck2Circle, BsInstagram, BsFillShareFill } from "react-icons/bs";
import { AiOutlineCalendar, AiOutlineCheck, AiOutlineInfoCircle } from "react-icons/ai";
import { BiError } from "react-icons/bi";
import { IoIosRocket, IoLogoJavascript } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import { GrNode } from "react-icons/gr";
import { VscTerminalPowershell } from "react-icons/vsc";
import { infinityRotate } from "../../theme/animations/rotate";

interface IconProps extends ChakraIconProps {
  name?: string;
};

const icons = {
  "react.js": FaReact,
  "node.js": GrNode,
  "typescript": SiTypescript,
  "next.js": SiNextdotjs,
  "html": AiFillHtml5,
  "css": DiCss3,
  "sass": DiSass,
  "javascript": IoLogoJavascript,
  "docker": FaDocker,
  "flutter": RiFlutterFill,
  "java": FaJava,
  "git": FaGitAlt,
  "python": FaPython,
  "bash": SiGnubash,
  "default": BsQuestionCircle,
  "calendar": AiOutlineCalendar,
  "check": AiOutlineCheck,
  "error": BiError,
  "success": BsCheck2Circle,
  "info": AiOutlineInfoCircle,
  "discord": FaDiscord,
  "github": FaGithubAlt,
  "linkedin": FaLinkedinIn,
  "instagram": BsInstagram,
  "facebook": FaFacebookF,
  "rocketseat": IoIosRocket,
  "youtube": AiFillYoutube,
  "currículo virtual": FiDownload,
  "shell": VscTerminalPowershell,
  "share": BsFillShareFill
};

function Icon({ name = "default", ...rest }: IconProps) {
  const _name = name.toLowerCase();
  const icon = icons[_name] ?? icons["default"];
  return (
    <ChakraIcon
      as={icon}
      { ..._name === "react.js"? infinityRotate():null } //o filho predileto
      {...rest}
    />
  );
};

export default Icon;