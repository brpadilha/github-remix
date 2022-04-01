import { LoaderFunction, useLoaderData } from "remix";
import { LoaderData } from "~/features/github/types";


// Loader function
// it will load data from github api and can access like a route on http://localhost:3000/github/$username
export const loader: LoaderFunction = async ({params})=>{
  const response = await fetch(`https://api.github.com/users/${params.username}`,{
    headers:{
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': 'token ' + process.env.GITHUB_TOKEN
    }
  });

  const { login, avatar_url, html_url, bio } = await response.json();
  
  return {
    user: { login, avatar_url, html_url, bio },
  };
}

// export default function(){
//   //get data User from loader
//   const { user } = useLoaderData<LoaderData>();

//   return (
//     <>
//       <h1>{user.login}</h1>
//       <blockquote>{user.bio}</blockquote>
//       <img src={user.avatar_url} alt={user.login} width="150"/>
//     </>
//   );
// }