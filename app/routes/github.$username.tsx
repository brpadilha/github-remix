import { LoaderFunction, useLoaderData } from "remix";
import { GithubContainer } from "~/features/github/GithubContainer";
import { LoaderData } from "~/features/github/types";
import { getGithubUser } from '../features/github/api';


// Loader function
// it will load data from github api and can access like a route on http://localhost:3000/github/$username
export const loader: LoaderFunction = async ({params})=>{
  return {
    user: await getGithubUser(params.username),
  }
}

export default function(){
  //get data User from loader
  const { user } = useLoaderData<LoaderData>();
  return (
    <GithubContainer user={user}/>
  );
}