import { api } from "./api";
import { getRepoFormattedName } from "../utils/getRepoFormattedName"; 

type GithubGetReposOptions = {
  reposPerPage: number;
  initialPage: number;
  repos: Repository[];
  formatters: Formatter[]
};

async function getGithubRepos(url: string, { 
  reposPerPage = 30, 
  initialPage = 1,
  repos = [],
  formatters = []
}: GithubGetReposOptions) {
  const pageRepos = await api.get(`${url}?per_page=${reposPerPage}&page=${initialPage}`).then(async(res) => {
    const data = res.data;
    const repos: Repository[] = data.map(repo => {
      return {
        id: repo.id,
        name: repo.name,
        fullname: repo.full_name,
        description: repo.description,
        fork: repo.fork,
        url: repo.url,
        language: repo.language,
        branch: repo.default_branch
      } as Repository;
    });

    for(let i in repos) {
      let config: Config = await api.get(`https://raw.githubusercontent.com/${repos[i].fullname}/${repos[i].branch}/l-marcel.config.json`)
      .then(config => config.data).catch(() => null);
      config = {
        name: repos[i].name,
        icon: repos[i].language,
        links: null,
        technologies: [
          repos[i].language
        ],
        ...config,
      };

      if(config.icon !== "self") {
        config.icon = config.technologies[0];
      };

      const languageIsIncluded = config.technologies.includes(repos[i].language);

      if(!languageIsIncluded) {
        config.technologies.push(repos[i].language);
      };

      const haveTypeScript = config.technologies.includes("TypeScript");
      const notHaveJavaScript = !config.technologies.includes("JavaScript");

      if(haveTypeScript && notHaveJavaScript) {
        config.technologies.push("JavaScript");
      };


      let badges = repos[i].description?.match(/\[+.+\]/g);
    
      if(badges) {
        repos[i].badge = badges[0].replace(/\[/g, "").replace(/\]/g, "");
        repos[i].description = repos[i].description.replace(/\[+.+\]/g, "");
      };

      repos[i].importedConfig = config;
      repos[i].formattedName = getRepoFormattedName(repos[i].importedConfig.name, formatters);
    };

    return repos;
  }).catch(() => [] as Repository[]);

  const reposListLength = repos.length + pageRepos.length;

  if(Math.floor(reposListLength/initialPage) >= reposPerPage) {
    return await getGithubRepos(url, { 
      reposPerPage, 
      initialPage: initialPage + 1, 
      repos: [ ...repos, ...pageRepos ],
      formatters,
    });
  };

  return [ ...repos, ...pageRepos ];
};

export { getGithubRepos };