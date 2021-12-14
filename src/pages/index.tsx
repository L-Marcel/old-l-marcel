import { Flex, useBreakpointValue } from "@chakra-ui/react";
import AboutMe from "../components/AboutMe";
import Profile from "../components/Profile";
import Experiences from "../components/Experiences";
import Qualities from "../components/Personality";
import { RepositoriesList } from "../components/RepositoriesList";
import Search from "../components/Search";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../services/prismic";
import { RichText } from "prismic-dom";
import { api } from "../services/api";
import { getGithubRepos } from "../services/github";
import useRepositories from "../hooks/useRepositories";
import { useEffect } from "react";
import { getPointsOfTecnology } from "../utils/getPointsOfTecnology";
import useUser from "../hooks/useUser";import Head from "next/head";
;

interface HomeProps {
  socialLinks: SocialLink[];
  cvLink?: string;
  user: User;
  repos: Repository[];
};

export default function Home({ socialLinks, cvLink, user, repos }: HomeProps) {
  const { setRepositories } = useRepositories();
  const { setUser } = useUser();
  const isWideOrNormalVersion = useBreakpointValue({
    lg: true,
    xl: true,
    base: false
  });

  useEffect(() => {
    setRepositories(repos);
    setUser(user);
  }, [repos, user]);

  const orderedContainers = [
    <Experiences key="experiences"/>,
    <AboutMe key="about-me" w="100%"/>
  ];

  return (
    <>
      <Head>
        <title>Lucas Marcel - Portfólio</title>
      </Head>
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
    </>
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

  const formatters = await prismic.getSingle("name_formatter", {}).then(res => {
    const formatters = res.data.formatter.map(f => {
      return {
        ...f,
        replace: f.replace !== ""? f.replace:" "
      } as Formatter;
    });
    return formatters;
  }).catch(() => []);

  const user = await api.get("https://api.github.com/users/l-marcel").then(res => {
    const data = res.data;
    const splitedName = data.name.split(" ");
    const firstName = splitedName.length > 0 ? splitedName[0]:"";
    const lastName = splitedName.length > 1 ? splitedName[splitedName.length - 1]:"";

    return {
      username: String(data.login).toLowerCase(),
      fullname: data.name,
      name: `${firstName} ${lastName}`,
      avatar: data.avatar_url,
      reposUrl: data.repos_url,
      qtdRepos: data.public_repos,
      about: "",
      certificates: [],
      historic: [],
      technologies: [],
      personality: []
    } as User;
  });

  const repos = await getGithubRepos(user.reposUrl, {
    initialPage: 1,
    reposPerPage: 50,
    repos: [],
    formatters
  });

  const user_data = await prismic.getSingle("profile", {}).then(res => {
    const about = RichText.asHtml(res.data.about
      
    ).replace(/\<pre\>/g, '<section><pre>')
    .replace(/\<\/pre>/g, '</section></pre>');
    const technologies: Technology[] = res.data.technology.map(technology => {
      const { 
        name,
        isstudying,
        haveexperience,
        haveprojects,
        haveinterest,
        abletolead,
        usewithfrequency,
        level 
      } = technology;

      const _tecnology = {
        name,
        isStudying: isstudying,
        haveExperience: haveexperience,
        haveProjects: haveprojects,
        haveInterest: haveinterest,
        ableToLead: abletolead,
        useWithFrequency: usewithfrequency,
        time: level,
        points: 0
      };

      _tecnology.points = getPointsOfTecnology(_tecnology);

      return _tecnology;
    });
    const personality: Personality[] = res.data.personality;
    return {
      about,
      technologies,
      personality
    };
  }).catch(() => {});

  return {
    props: {
      user: {
        ...user,
        ...user_data
      },
      repos,
      ...data
    } as HomeProps,
    revalidate: 1000 * 60 * 60 * 24 //A cada 24 horas atualiza os dados
  };
};