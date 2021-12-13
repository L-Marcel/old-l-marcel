declare type SocialLink = {
  name: string;
  background: string;
  link: string;
  type: "link" | "copy"
};

declare type User = {
  username: string;
  fullname: string;
  name: string;
  avatar: string;
  reposUrl: string;
  qtdRepos: number;
};