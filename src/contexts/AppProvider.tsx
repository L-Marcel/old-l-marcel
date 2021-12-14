import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";

interface AppProviderProps {
  children: ReactNode;
};

export const appContext = createContext({} as AppContext);

function AppProvider({ children }: AppProviderProps) {
  const [user, setUser] = useState<User>({
    about: "",
    avatar: "",
    certificates: [],
    fullname: "",
    historic: [],
    name: "",
    personality: [],
    qtdRepos: 0,
    reposUrl: "",
    technologies: [],
    username: ""
  });
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [filteredRepositories, setFilteredRepositories] = useState<Repository[]>([]);
  const [filterOptions, setFilterOptions] = useState<RepositoriesFilterOptions>({
    with: {
      _skip: true,
      description: false,
      figmaLink: false,
    },
    is: {
      _skip: true,
      fork: false,
    },
    minLevelOfExperienceWithTechnology: 0,
    technologies: [],
    query: "",
  });

  const _setUser = useCallback((user: User) => {
    setUser(user);
  }, [setUser]);
  
  const _setRepositories = useCallback((repositories: Repository[]) => {
    setRepositories(repositories);
  }, [setRepositories]);

  const _setFilterOptions = useCallback((options: RepositoriesFilterOptions) => {
    setFilterOptions(options);
  }, [setFilterOptions]);

  useEffect(() => {
    setFilterOptions(f => {
      return {
        ...f,
        technologies: user?.technologies.map(t => t.name) ?? []
      };
    });
  }, [user]);

  useEffect(() => {
    let repos = repositories;

    //with
    if(filterOptions.with._skip) {
      const { description, figmaLink } = filterOptions.with;
      repos = repos.filter(r => {
        const a = r.description || !description;
        let b = false;

        try {
          b = r.importedConfig.links["figma"] !== undefined;
        } catch (error) {
          b = !figmaLink;
        }

        if(a && b) {
          return true;
        };

        return false;
      });
    };

    //is
    if(filterOptions.is._skip) {
      const { fork } = filterOptions.is;
      repos = repos.filter(r => {
        return r.fork || !fork;
      });
    };

    // technologies: string[];
    repos = repos.filter(r => {
      return filterOptions.technologies.includes(r.importedConfig.technologies[0]);
    });
    
    //minLevelOfExperienceWithTechnology
    // const minLevel = filterOptions.minLevelOfExperienceWithTechnology;
    // if(minLevel > 0) {
    //   const userTechnologies = user.technologies; //Technology[]
    //   repos = repos.filter(r => {
    //     const reposTechnology = r.importedConfig.technologies[1];
        
    //     for(let i in userTechnologies) {
    //       const technology = userTechnologies[i];
    //       if(technology .level < minLevel && technology.name === reposTechnology) {
    //         return false;
    //       };
    //     };
        
    //     return true;
    //   });
    // };

    // query: string;
    repos = repos.filter(r => {
      return r.name.toLowerCase()
      .match(filterOptions.query.toLowerCase()) ||
      r.formattedName.toLowerCase()
      .match(filterOptions.query.toLowerCase());
    });

    setFilteredRepositories(repos);
  }, [repositories, filterOptions, user]);

  return (
    <appContext.Provider
      value={{
        filteredRepositories,
        repositories,
        setRepositories: _setRepositories,
        filterOptions,
        setFilterOptions: _setFilterOptions,
        user,
        setUser: _setUser
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export { AppProvider };