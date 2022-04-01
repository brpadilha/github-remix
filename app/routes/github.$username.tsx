import { LoaderFunction, useLoaderData } from "remix";
import { GithubApi, GithubContainer, LoaderData } from "~/features/github";



// Loader function
// it will load data from github api and can access like a route on http://localhost:3000/github/$username
export const loader: LoaderFunction = async ({params})=>{
  return {
    user: await GithubApi.getGithubUser(params.username),
  };
}

export default function(){
  //get data User from loader
  const { user } = useLoaderData<LoaderData>();
  return (
    <GithubContainer user={user}/>
  );
}