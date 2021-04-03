const reverse = (s: string) => {
  return s.split("").reverse().join("");
};

const MAKE_REV_TOKEN = () => {
  return reverse(process.env.REACT_APP_GITHUB_API_DEVELOP_TOKEN_REV as string);
};

export const APPLICATION_TITLE = "Githubistic";
export const APPLICATION_DEVELOPER = "lovejet";
export const API_GITHUB_REPO_SEARCH_URL =
  "https://api.github.com/search/repositories?q=%1&page=%2&per_page=%3&order=%4&sort=%5";
export const API_GITHUB_REPO_DETAIL_URL = "https://api.github.com/repos/%1/%2";
export const GITHUB_API_DEVELOP_TOKEN = MAKE_REV_TOKEN();
export const LANGUGAE_FILTER_OPTIONS = [
  {
    index: 0,
    key: "All",
  },
  {
    index: 1,
    key: "Python",
  },
  {
    index: 2,
    key: "Go",
  },
  {
    index: 3,
    key: "HTML",
  },
  {
    index: 4,
    key: "R",
  },
  {
    index: 5,
    key: "Javascript",
  },
  {
    index: 6,
    key: "Shell",
  },
  {
    index: 7,
    key: "Typescript",
  },
  {
    index: 8,
    key: "Erlang",
  },
];
export const SORT_OPTIONS = [
  {
    index: 0,
    key: "Best match",
    o: "desc",
    s: "",
  },
  {
    index: 1,
    key: "Most stars",
    o: "desc",
    s: "stars",
  },
  {
    index: 2,
    key: "Fewest stars",
    o: "asc",
    s: "stars",
  },
  {
    index: 3,
    key: "Most forks",
    o: "desc",
    s: "forks",
  },
  {
    index: 4,
    key: "Fewest forks",
    o: "asc",
    s: "forks",
  },
];
export const ITEMS_PER_PAGE = [10, 25, 50, 100];
