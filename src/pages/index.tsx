import { Flex, useBreakpointValue } from "@chakra-ui/react";
import AboutMe from "../components/AboutMe";
import Profile from "../components/Profile";
import Experiences from "../components/Experiences";
import Qualities from "../components/Personality";
import RepositoriesList from "../components/RepositoriesList";
import Search from "../components/Search";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../services/prismic";

interface HomeProps {
  socialLinks: SocialLink[];
  cvLink?: string;
  user: User;
};

export default function Home({ socialLinks, cvLink, user }: HomeProps) {
  const isWideOrNormalVersion = useBreakpointValue({
    lg: true,
    xl: true,
    base: false
  });

  const orderedContainers = [
    <Experiences/>,
    <AboutMe w="100%"/>
  ];

  return (
    <Flex
      justifyContent="space-between"
      flexDir={["column", "column", "column", "row"]}
      h="100vh"
      overflowX="auto"
      p={[30, 50]}
    >
      <Flex 
        flexDir="column"
        h="max-content"
      >
        <Profile 
          cvLink={cvLink} 
          socialLinks={socialLinks} 
          isWideOrNormalVersion={isWideOrNormalVersion}
          user={user}
        />
        { orderedContainers[isWideOrNormalVersion? 0:1] }
        <Qualities/>
      </Flex>
      <Flex flexDir="column"
        ml={[0, 0, 0, 50]}
        flex={[null, "1"]}
        h="max-content"
      >
        { orderedContainers[isWideOrNormalVersion? 1:0] }
        <Search/>
        <RepositoriesList/>
      </Flex>
    </Flex>
  );
};

export const getStaticProps: GetStaticProps = async() => {
  const prismic = getPrismicClient();
  const data = await prismic.getSingle("social-links", {}).then(res => {
    const { media, "cv-link": cvLink } = res.data;
    const socialLinks: SocialLink[] = media.map(sl => {
      return {
        name: sl.name,
        background: sl.background.url,
        link: sl.link,
        type: sl.islink? "link":"copy",
      } as SocialLink;
    });
    
    return {
      socialLinks,
      cvLink
    };
  });

  const user = await fetch("https://api.github.com/users/l-marcel")
  .then(res => res.json()).then(res => {
    const name = res.name;
    const splitedName = name.split(" ");
    const firstName = splitedName.length > 0 ? splitedName[0]:"";
    const lastName = splitedName.length > 1 ? splitedName[splitedName.length - 1]:"";

    return {
      username: String(res.login).toLowerCase(),
      fullname: name,
      name: `${firstName} ${lastName}`,
      avatar: res.avatar_url,
      reposUrl: res.repos_url,
      qtdRepos: res.public_repos,
    } as User;
  });

  const repos = await fetch(user.reposUrl)
  .then(res => res.json()).then(async(res) => {
    if(res.name.toLowerCase().includes("l-marcel")){
      const config = await fetch(`https://raw.githubusercontent.com/${res.full_name}/${res.default_branch}/l-marcel.config.json`)
      .then(res => res.json()).then(res => {
        console.log(res);
        return {

        };
      }).catch(() => {
        return {};
      });
    };

    return {
      id: res.id,
      name: res.name,
      fullname: res.full_name,
      description: res.description,
      fork: res.fork,
      url: res.url,
      language: res.language,
      branch: res.default_branch
    };
  });
  
  return {
    props: {
      user,
      ...data
    } as HomeProps,
    revalidate: 1000 * 60 * 60 * 24 //24 horas
  };
};