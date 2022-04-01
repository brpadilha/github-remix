import { LoaderFunction, useLoaderData } from "remix";
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
    <>
      <h1>{user.login}</h1>
      <blockquote>{user.bio}</blockquote>
      <img src={user.avatar_url} alt={user.login} width="150"/>
    </>
  );
}