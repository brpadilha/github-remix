
export const getGithubUser = async (username?: string)=>{
  const response = await fetch(
    `https://api.github.com/users/${username}`,
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: "token " + process.env.GITHUB_TOKEN,
      },
    }
  );

  const { login, avatar_url, html_url, bio } = await response.json();

  return {
    user: { login, avatar_url, html_url, bio },
  };
}