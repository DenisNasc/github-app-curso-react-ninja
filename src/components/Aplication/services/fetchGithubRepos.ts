import axios from '../../../axios';

type reposFromGithub = {
  name: string;
  id: number;
  language: string | null;
  // eslint-disable-next-line camelcase
  html_url: string;
  // eslint-disable-next-line camelcase
  created_at: string;
};

const fetchGithubRepos = async (query: string) => {
  const response = await axios.get(`users/${query}/repos`);

  const repositories = response.data.map((repo: reposFromGithub) => ({
    name: repo.name,
    id: repo.id,
    language: repo.language,
    linkTo: repo.html_url,
    createdAt: repo.created_at
  }));

  return repositories;
};

export default fetchGithubRepos;
