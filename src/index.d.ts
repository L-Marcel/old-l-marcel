declare type SocialLink = {
  name: string;
  background: string;
  link: string;
  type: "link" | "copy"
};

declare type Technology = {
  name: string;
  isStudying: boolean;
  haveExperience: boolean;
  haveProjects: boolean;
  haveInterest: boolean;
  ableToLead: boolean;
  useWithFrequency: boolean;
  time: string;
  points: number;
};

declare type HistoricEvent = {

};

declare type Certificate = {

};

declare type Personality = {
  type: "quality" | "defect";
  description: string;
};

declare type User = {
  username: string;
  fullname: string;
  name: string;
  avatar: string;
  reposUrl: string;
  qtdRepos: number;
  technologies: Technology[];
  historic: HistoricEvent[];
  certificates: Ceriticate[];
  personality: Personality[];
  about: string;
};

declare type Repository = {
  id: number;
  name: string;
  fullname: string;
  formattedName?: string;
  description?: string;
  fork?: boolean;
  url: string;
  language: string;
  branch: string;
  importedConfig?: Config;
};

declare type Config = {
  name: string;
  icon: string;
  technologies: string[];
  links: { 
    [key: string]: string 
  };
};

declare type RepositoriesFilterOptions = {
  minLevelOfExperienceWithTechnology: number;
  technologies: string[];
  query: string;
  with: {
    description: boolean;
    figmaLink: boolean;
    _skip: boolean;
  };
  is: {
    fork: boolean;
    _skip: boolean;
  };
};

declare type AppContext = {
  filteredRepositories: Repository[];
  filterOptions: RepositoriesFilterOptions;
  setFilterOptions: (options: RepositoriesFilterOptions) => void;
  repositories: Repository[];
  setRepositories: (repositories: Repository[]) => void;
  user: User;
  setUser: (user: User) => void;
};

declare type Formatter = {
  regex: string;
  replace: string;
};